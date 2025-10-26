/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

export function TechStack() {
  const stack = [
    {
      icon: '⚛️',
      title: 'React + TypeScript',
      description: 'Type-safe frontend',
    },
    {
      icon: '🎯',
      title: 'Next.js App Router',
      description: 'Server-side rendering',
    },
    {
      icon: '🗄️',
      title: 'PostgreSQL + Prisma',
      description: 'Type-safe database',
    },
    {
      icon: '🐳',
      title: 'Docker Containers',
      description: 'Isolated environments',
    },
    {
      icon: '☁️',
      title: 'Hetzner Cloud VPS',
      description: 'Staging + Production',
    },
    {
      icon: '🔄',
      title: 'GitHub Actions CI/CD',
      description: 'Automated deployments',
    },
    {
      icon: '✅',
      title: 'ESLint + TS Strict',
      description: 'Code quality gates',
    },
    {
      icon: '📊',
      title: 'GlitchTip + Umami',
      description: 'Error tracking + Analytics',
    },
  ]

  return (
    <section id="tech-stack" className="bg-secondary py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">
          Tech Stack
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Modern technologies for reliable, scalable applications
        </p>

        {/* Stack Grid - 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-3 text-3xl">{item.icon}</div>

              {/* Title */}
              <h3 className="mb-1 text-base font-semibold text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{item.description}</p>

              {/* Subtle hover gradient */}
              <div className="pointer-events-none absolute right-0 top-0 h-[80px] w-[80px] translate-x-[20px] translate-y-[-20px] rounded-full bg-gradient-to-br from-transparent to-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
