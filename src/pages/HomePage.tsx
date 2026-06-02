/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Proof } from '../components/Proof'
import { Founder } from '../components/Founder'
import { ContactForm } from '../components/ContactForm'
import { useLanguage } from '../i18n/LanguageContext'

export function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-[60px]">
        <Hero />
        <Services />
        <Proof />
        <Founder />
        <ContactForm />
      </div>

      <footer className="relative z-[105] bg-foreground py-6 text-white">
        <div className="container mx-auto text-center">
          <p className="mb-3 text-lg opacity-90">{t.footer.tagline}</p>
          <a
            href="/imprint"
            className="inline-block px-3 py-2 text-sm opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100"
          >
            {t.footer.imprint}
          </a>
        </div>
      </footer>
    </div>
  )
}
