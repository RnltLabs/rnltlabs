/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const CONSENT_KEY = 'cookie-consent'

/**
 * Loads the Umami Analytics script dynamically when user consents
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
 * Removes the Umami Analytics script when user withdraws consent
 */
function removeUmamiScript(): void {
  const script = document.querySelector('script[data-website-id]')
  if (script) {
    script.remove()
  }
}

const copy = {
  en: {
    title: 'Cookie settings',
    body: 'We use cookies to analyse and improve the usage of our website. Analytics cookies help us understand how visitors interact with it. For more information, see our',
    privacy: 'Privacy Policy',
    reject: 'Essential only',
    accept: 'Accept all',
  },
  de: {
    title: 'Cookie-Einstellungen',
    body: 'Wir nutzen Cookies, um die Nutzung unserer Website zu analysieren und zu verbessern. Analyse-Cookies helfen uns zu verstehen, wie Besucher mit ihr interagieren. Mehr dazu in unserer',
    privacy: 'Datenschutzerklärung',
    reject: 'Nur essenzielle',
    accept: 'Alle akzeptieren',
  },
}

/**
 * GDPR-compliant consent banner.
 *
 * Named "ConsentBanner" (not "CookieBanner") so that ad/tracking blockers do
 * not block the module file by its name in dev. Behaviour is unchanged.
 */
export function ConsentBanner() {
  const { lang } = useLanguage()
  const t = copy[lang]
  const [consent, setConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored !== null) {
      const hasConsent = stored === 'true'
      setConsent(hasConsent)
      if (hasConsent) {
        loadUmamiScript()
      }
    }
  }, [])

  const handleAcceptAll = (): void => {
    localStorage.setItem(CONSENT_KEY, 'true')
    setConsent(true)
    loadUmamiScript()
  }

  const handleRejectAll = (): void => {
    localStorage.setItem(CONSENT_KEY, 'false')
    setConsent(false)
    removeUmamiScript()
  }

  if (consent !== null) {
    return null
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[200] border-t bg-card shadow-lg"
      role="dialog"
      aria-label={t.title}
    >
      <div className="container mx-auto max-w-[1200px] px-6 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-lg font-semibold text-foreground">{t.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t.body}{' '}
              <Link
                to="/imprint#datenschutz"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {t.privacy}
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleRejectAll}
              className="rounded-lg border bg-secondary px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="button"
            >
              {t.reject}
            </button>
            <button
              onClick={handleAcceptAll}
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              type="button"
            >
              {t.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
