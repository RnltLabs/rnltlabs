/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: roman@rnltlabs.de
 */

import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

type PageKey = 'home' | 'imprint' | 'cookie'

const SITE = 'https://rnltlabs.de'
const PATHS: Record<PageKey, string> = {
  home: '/',
  imprint: '/imprint',
  cookie: '/cookie-settings',
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Per-route, language-aware document head.
 *
 * Dependency-free (no react-helmet): this is a CSR app, so a small imperative
 * head updater is the most robust option on React 19. It keeps title,
 * description, robots, canonical and Open Graph / Twitter tags in sync with the
 * active route and language.
 *
 * Note: this runs after hydration, so it benefits JS-rendering crawlers (e.g.
 * Googlebot) and link unfurling, not non-JS crawlers. True per-language URLs +
 * hreflang require pre-rendering / SSG (tracked separately).
 */
export function Seo({ page }: { page: PageKey }) {
  const { t, lang } = useLanguage()
  const meta = t.seo[page]

  useEffect(() => {
    const url = SITE + PATHS[page]
    const ogLocale = lang === 'de' ? 'de_DE' : 'en_US'
    const ogLocaleAlt = lang === 'de' ? 'en_US' : 'de_DE'

    document.title = meta.title
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', meta.robots)
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:locale', ogLocale)
    upsertMeta('property', 'og:locale:alternate', ogLocaleAlt)

    upsertMeta('property', 'twitter:title', meta.title)
    upsertMeta('property', 'twitter:description', meta.description)
    upsertMeta('property', 'twitter:url', url)
  }, [page, lang, meta.title, meta.description, meta.robots])

  return null
}
