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
      gradientFrom: '#3b82f6',
      gradientTo: '#06b6d4',
    },
    {
      icon: '🎯',
      title: 'Next.js App Router',
      description: 'Server-side rendering',
      gradientFrom: '#a855f7',
      gradientTo: '#ec4899',
    },
    {
      icon: '🗄️',
      title: 'PostgreSQL + Prisma',
      description: 'Type-safe database',
      gradientFrom: '#22c55e',
      gradientTo: '#10b981',
    },
    {
      icon: '🐳',
      title: 'Docker Containers',
      description: 'Isolated environments',
      gradientFrom: '#2563eb',
      gradientTo: '#4f46e5',
    },
    {
      icon: '☁️',
      title: 'Hetzner Cloud VPS',
      description: 'Staging + Production',
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
    },
    {
      icon: '🔄',
      title: 'GitHub Actions CI/CD',
      description: 'Automated deployments',
      gradientFrom: '#9333ea',
      gradientTo: '#7c3aed',
    },
    {
      icon: '✅',
      title: 'ESLint + TS Strict',
      description: 'Code quality gates',
      gradientFrom: '#eab308',
      gradientTo: '#f59e0b',
    },
    {
      icon: '📊',
      title: 'GlitchTip + Umami',
      description: 'Error tracking + Analytics',
      gradientFrom: '#ec4899',
      gradientTo: '#f43f5e',
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
              {/* Gradient top border */}
              <div
                className="absolute left-0 top-0 h-0.5 w-full scale-x-0 transition-transform group-hover:scale-x-100"
                style={{
                  backgroundImage: `linear-gradient(to right, ${item.gradientFrom}, ${item.gradientTo})`,
                }}
              />

              {/* Background gradient fade */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${item.gradientFrom}, ${item.gradientTo})`,
                }}
              />

              {/* Icon */}
              <div className="relative z-10 mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">{item.icon}</div>

              {/* Title */}
              <h3 className="relative z-10 mb-1 text-base font-semibold text-foreground">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-muted-foreground">{item.description}</p>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
