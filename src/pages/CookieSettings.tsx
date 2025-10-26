/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { useState, useEffect } from 'react'
import { Header } from '../components/Header'

const COOKIE_CONSENT_KEY = 'cookie-consent'

/**
 * Loads the Umami Analytics script dynamically
 */
function loadUmamiScript(): void {
  const existingScript = document.querySelector('script[data-website-id]')
  if (existingScript) {
    return
  }

  const script = document.createElement('script')
  script.src = 'https://analytics.rnltlabs.de/script.js'
  script.dataset.websiteId = 'b07feb57-e707-453e-8c8d-aac1894d060c'
  script.defer = true
  document.head.appendChild(script)
}

/**
 * Removes the Umami Analytics script
 */
function removeUmamiScript(): void {
  const script = document.querySelector('script[data-website-id]')
  if (script) {
    script.remove()
  }
}

/**
 * Cookie Settings page for managing cookie preferences
 *
 * Allows users to view and modify their cookie consent preferences.
 * Provides detailed information about each cookie category.
 */
export function CookieSettings() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(false)
  const [saveMessage, setSaveMessage] = useState<string>('')

  useEffect(() => {
    // Load current consent state
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    setAnalyticsEnabled(storedConsent === 'true')

    // If consent exists, ensure Umami is loaded/removed accordingly
    if (storedConsent === 'true') {
      loadUmamiScript()
    } else if (storedConsent === 'false') {
      removeUmamiScript()
    }
  }, [])

  const handleSaveSettings = (): void => {
    // Save the analytics preference
    localStorage.setItem(COOKIE_CONSENT_KEY, analyticsEnabled.toString())

    // Load or remove Umami script based on preference
    if (analyticsEnabled) {
      loadUmamiScript()
    } else {
      removeUmamiScript()
    }

    // Show success message
    setSaveMessage('Ihre Einstellungen wurden gespeichert.')
    setTimeout(() => setSaveMessage(''), 3000)

    // Trigger storage event for other tabs/windows
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />

      {/* Cookie Settings Section */}
      <section className="bg-background py-12 pt-20">
        <div className="container mx-auto max-w-[1200px] px-8">
          <h1 className="mb-6 text-[2rem] font-semibold text-foreground">
            Cookie-Einstellungen
          </h1>

          {/* Introduction */}
          <div className="group relative mb-8 overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <p className="mb-4 leading-relaxed text-muted-foreground">
              Auf dieser Seite können Sie Ihre Cookie-Einstellungen verwalten. Wir respektieren
              Ihre Privatsphäre und geben Ihnen die vollständige Kontrolle darüber, welche Cookies
              Sie akzeptieren möchten.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Bitte beachten Sie: Diese Website erfordert keine Benutzerkonten und speichert keine
              personenbezogenen Daten außer den hier beschriebenen Cookies.
            </p>
          </div>

          {/* Essential Cookies */}
          <div className="group relative mb-6 overflow-hidden rounded-2xl border bg-card p-10 shadow-sm">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-accent/5" />

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Essenziell</h2>
                <p className="mt-1 text-sm text-muted-foreground">Immer aktiv</p>
              </div>
              <div className="relative inline-flex items-center">
                <input
                  type="checkbox"
                  checked={true}
                  disabled={true}
                  className="h-5 w-5 cursor-not-allowed rounded border-border bg-secondary"
                  aria-label="Essenzielle Cookies"
                />
              </div>
            </div>

            <p className="mb-3 leading-relaxed text-muted-foreground">
              Essenzielle Cookies sind für die Grundfunktionen der Website erforderlich und können
              nicht deaktiviert werden.
            </p>

            <div className="rounded-lg bg-secondary p-4">
              <h3 className="mb-2 font-medium text-foreground">Verwendete Cookies:</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>
                  <strong className="font-medium text-foreground">cookie-consent</strong>:
                  Speichert Ihre Cookie-Einwilligung (12 Monate)
                </li>
              </ul>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="group relative mb-8 overflow-hidden rounded-2xl border bg-card p-10 shadow-sm">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Analytics</h2>
                <p className="mt-1 text-sm text-muted-foreground">Optional</p>
              </div>
              <div className="relative inline-flex items-center">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="h-5 w-5 cursor-pointer rounded border-border accent-primary transition-colors"
                  aria-label="Analytics Cookies"
                />
              </div>
            </div>

            <p className="mb-3 leading-relaxed text-muted-foreground">
              Analytics-Cookies helfen uns zu verstehen, wie Besucher mit unserer Website
              interagieren. Alle Daten werden anonymisiert erfasst.
            </p>

            <div className="mb-4 rounded-lg bg-secondary p-4">
              <h3 className="mb-2 font-medium text-foreground">Umami Analytics:</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Anonymisierte IP-Adresse (gekürzt)</li>
                <li>Browser-Typ und Betriebssystem</li>
                <li>Besuchte Seiten und Verweildauer</li>
                <li>Referrer (woher Sie kamen)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-medium text-foreground">
                <svg
                  className="h-5 w-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Datenschutzfreundlich
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Selbst gehostet auf deutschen Servern (Hetzner)</li>
                <li>Keine Cookies von Drittanbietern</li>
                <li>Keine personenbezogenen Daten</li>
                <li>DSGVO-konform</li>
              </ul>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleSaveSettings}
              className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="button"
            >
              Einstellungen speichern
            </button>

            {saveMessage && (
              <p className="text-sm font-medium text-accent" role="status">
                {saveMessage}
              </p>
            )}
          </div>

          {/* Additional Information */}
          <div className="mt-8 rounded-2xl border bg-secondary p-8">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Weitere Informationen
            </h2>

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="font-medium text-foreground">Speicherdauer:</strong> Cookie-Einstellungen
                werden 12 Monate in Ihrem Browser gespeichert.
              </p>

              <p>
                <strong className="font-medium text-foreground">Widerruf:</strong> Sie können Ihre
                Einwilligung jederzeit auf dieser Seite ändern oder widerrufen.
              </p>

              <p>
                <strong className="font-medium text-foreground">Kontakt:</strong> Für Anfragen zu
                Ihren Daten kontaktieren Sie uns unter:{' '}
                <a
                  href="mailto:hello@rnltlabs.de"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  hello@rnltlabs.de
                </a>
              </p>

              <p>
                Weitere Details finden Sie in unserer{' '}
                <a
                  href="/imprint#datenschutz"
                  className="font-medium text-primary underline-offset-4 hover:underline"
                >
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-[105] bg-foreground py-4 text-white">
        <div className="container mx-auto text-center">
          <p className="mb-1 text-lg opacity-90">We test in production so you don't have to.</p>
          <div className="flex items-center justify-center gap-1">
            <a
              href="/imprint"
              className="inline-block px-3 py-2 text-sm opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100"
            >
              Imprint
            </a>
            <span className="text-sm opacity-50">|</span>
            <a
              href="/cookie-settings"
              className="inline-block px-3 py-2 text-sm opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
