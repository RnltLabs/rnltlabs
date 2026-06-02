/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { NeuralNetworkBackground } from './NeuralNetworkBackground'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-8 py-20">
      {/* Neural Network Background */}
      <NeuralNetworkBackground />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />

      {/* Hero Content */}
      <div className="relative z-[2] flex w-full max-w-[820px] flex-col items-center animate-fadeInUp">
        {/* Main Heading */}
        <h1 className="mb-8 w-full bg-gradient-to-br from-foreground to-primary bg-clip-text text-center text-[clamp(3rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-transparent">
          {h.title[0]}
          <br />
          {h.title[1]}
        </h1>

        {/* Subtitle */}
        <p className="mb-10 w-full max-w-[640px] text-center text-xl leading-relaxed text-muted-foreground">
          {h.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
          >
            {h.ctaPrimary}
          </a>
          <a
            href="#proof"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 bg-background/60 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            {h.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll Hint */}
      <a
        href="#services"
        className="absolute bottom-8 z-[100] inline-block cursor-pointer rounded-lg p-3 text-2xl text-primary transition-colors hover:text-accent focus:text-accent active:text-accent animate-bounce"
        aria-label={h.scrollHint}
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
