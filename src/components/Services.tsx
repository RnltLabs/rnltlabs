/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

/** Reveal a section once it scrolls into view. */
function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function Services() {
  const { t } = useLanguage()
  const s = t.services
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-6 max-w-[820px] text-[2.5rem] font-semibold leading-tight text-foreground">
          {s.title}
        </h2>
        <p className="mb-14 max-w-[760px] text-lg leading-relaxed text-muted-foreground">
          {s.intro}
        </p>

        {/* How it works: animated timeline */}
        <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {s.howTitle}
        </h3>
        <div ref={ref} className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connecting line (desktop only) */}
          <div
            className={`absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 origin-left bg-gradient-to-r from-primary/30 via-primary/40 to-primary/20 transition-transform duration-1000 ease-out lg:block ${
              inView ? 'scale-x-100' : 'scale-x-0'
            }`}
          />

          {s.steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative flex flex-col lg:items-center lg:text-center ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-md ring-4 ring-background">
                {i + 1}
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h4>
              <p className="max-w-[260px] text-[0.95rem] leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Best fit + CTA */}
        <div className="mt-16 flex flex-col gap-6 rounded-2xl border bg-secondary p-8 md:flex-row md:items-center md:justify-between">
          <p className="max-w-[640px] text-[0.95rem] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{s.forWhoLabel}: </span>
            {s.forWho}
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary"
          >
            {s.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
