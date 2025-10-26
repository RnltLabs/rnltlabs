/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const COOKIE_CONSENT_KEY = 'cookie-consent'

/**
 * Loads the Umami Analytics script dynamically when user consents
 */
function loadUmamiScript(): void {
  // Check if script is already loaded
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
 * Removes the Umami Analytics script when user withdraws consent
 */
function removeUmamiScript(): void {
  const script = document.querySelector('script[data-website-id]')
  if (script) {
    script.remove()
  }
}

/**
 * GDPR-compliant cookie consent banner component
 *
 * Shows on first visit and allows users to accept or reject analytics cookies.
 * Stores consent preference in localStorage and loads/removes Umami Analytics accordingly.
 */
export function CookieBanner() {
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)

    if (storedConsent !== null) {
      const hasConsent = storedConsent === 'true'
      setConsent(hasConsent)

      // Load Umami if consent was previously given
      if (hasConsent) {
        loadUmamiScript()
      }
    }
  }, [])

  const handleAcceptAll = (): void => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true')
    setConsent(true)
    loadUmamiScript()
  }

  const handleRejectAll = (): void => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false')
    setConsent(false)
    removeUmamiScript()
  }

  // Don't show banner if user has already made a choice
  if (consent !== null) {
    return null
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] border-t bg-card shadow-lg"
      role="dialog"
      aria-label="Cookie Einstellungen"
    >
      <div className="container mx-auto max-w-[1200px] px-6 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Information text */}
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Cookie-Einstellungen
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und zu verbessern.
              Analytics-Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
              Weitere Informationen finden Sie in unserer{' '}
              <Link
                to="/imprint#datenschutz"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleRejectAll}
              className="rounded-lg border bg-secondary px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="button"
            >
              Nur Essenziell
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="button"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

