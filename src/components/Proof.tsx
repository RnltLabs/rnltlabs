/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const gradients = [
  { from: '#22c55e', to: '#10b981' },
  { from: '#8b5cf6', to: '#a855f7' },
  { from: '#3b82f6', to: '#06b6d4' },
  { from: '#f97316', to: '#ef4444' },
]

export function Proof() {
  const { t } = useLanguage()
  const p = t.proof

  return (
    <section id="proof" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-10 text-[2.5rem] font-semibold leading-tight text-foreground">
          {p.title}
        </h2>

        <div className="space-y-6">
          {p.projects.map((project, i) => {
            // Some projects expose a second link (e.g. a live demo) in addition to `link`.
            const extra = project as { demo?: string; demoLabel?: string }
            return (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-[0.06]"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${gradients[i].from}, ${gradients[i].to})`,
                }}
              />
              <div className="relative z-10 mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-[1.4rem] font-semibold text-foreground">{project.title}</h3>
                <span className="rounded-full border border-primary bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary">
                  {project.tag}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-accent"
                  >
                    {project.linkLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {extra.demo && (
                  <a
                    href={extra.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-accent"
                  >
                    {extra.demoLabel}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
              <p className="relative z-10 max-w-[860px] text-[1.02rem] leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
