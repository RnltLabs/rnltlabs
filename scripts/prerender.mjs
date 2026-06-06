/**
 * Build-time pre-rendering for the RNLT Labs SPA.
 *
 * Renders the real app in a headless browser (no SSR, no app refactor, no
 * design change) and writes the fully-rendered HTML per route into dist/, so
 * crawlers and non-JS clients get real content + per-route meta on first
 * request. The client JS still boots and takes over as before.
 *
 * Runs after `vite build` (see package.json "build"). Uses puppeteer-core +
 * a system Chrome/Chromium (set PUPPETEER_EXECUTABLE_PATH in CI).
 */
import { spawn } from 'node:child_process'
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import puppeteer from 'puppeteer-core'

const PORT = 4178
const BASE = `http://localhost:${PORT}`
const DIST = resolve('dist')
// Routes to pre-render. cookie-settings is noindex/utility -> left as CSR fallback.
const ROUTES = ['/', '/imprint']
// Abort only EXTERNAL tracker/form hosts. Must not match local asset chunks
// such as /assets/vendor-sentry-*.js (that would break the app boot).
const BLOCK = /^https?:\/\/(analytics\.rnltlabs\.de|errors\.rnltlabs\.de|api\.web3forms\.com|www\.google-analytics\.com|www\.googletagmanager\.com)/i

function findChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH
  const candidates = [
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
    '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ]
  const found = candidates.find((c) => existsSync(c))
  if (!found) {
    throw new Error(
      'No Chrome/Chromium found. Set PUPPETEER_EXECUTABLE_PATH to a browser binary.',
    )
  }
  return found
}

async function waitForServer(url, tries = 80) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { redirect: 'manual' })
      if (res.status > 0) return
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 250))
  }
  throw new Error(`Preview server did not start at ${url}`)
}

const preview = spawn(
  process.execPath,
  [join('node_modules', 'vite', 'bin', 'vite.js'), 'preview', '--port', String(PORT), '--strictPort'],
  { stdio: 'ignore', cwd: process.cwd() },
)

let browser
try {
  await waitForServer(BASE)
  browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  for (const route of ROUTES) {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 900 })
    // Force English so the pre-rendered HTML is deterministic (matches the
    // English-first static meta + canonical), regardless of CI browser locale.
    await page.evaluateOnNewDocument(() => {
      try {
        localStorage.setItem('rnlt-lang', 'en')
      } catch {
        /* ignore */
      }
    })
    await page.setRequestInterception(true)
    page.on('request', (req) => {
      const u = req.url()
      if (!u.startsWith(BASE) && BLOCK.test(u)) req.abort()
      else req.continue()
    })

    await page.goto(BASE + route, { waitUntil: 'domcontentloaded', timeout: 30000 })
    await page.waitForSelector('#root h1', { timeout: 20000 })
    await new Promise((r) => setTimeout(r, 350)) // settle remaining sync render

    const html = await page.content()
    // Flat files (imprint.html, not imprint/index.html) so nginx `try_files
    // $uri.html` serves them at the slash-less URL without a 301 redirect,
    // matching the canonical and sitemap (/imprint).
    const out = route === '/' ? join(DIST, 'index.html') : join(DIST, route.replace(/^\//, '') + '.html')
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, html)
    console.log(`prerendered ${route} -> ${out} (${(html.length / 1024).toFixed(1)} kB)`)
    await page.close()
  }
} finally {
  if (browser) await browser.close()
  preview.kill()
}
