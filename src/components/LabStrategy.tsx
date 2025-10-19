/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

export function LabStrategy() {
  const strategies = [
    {
      icon: '⚡',
      title: 'Pre-hype adoption',
      description: 'Identify and apply new tech early',
    },
    {
      icon: '🚀',
      title: 'Speed',
      description: 'Rapid validation, lean prototyping, frequent releases',
    },
    {
      icon: '🔧',
      title: 'Modularity',
      description: 'Agent-based architectures tailored to context',
    },
    {
      icon: '📈',
      title: 'Production-first',
      description: 'Live testing and iteration from day one',
    },
  ]

  return (
    <section id="strategy" className="bg-secondary py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">Lab Strategy</h2>

        {/* Main Card */}
        <div className="group relative mt-8 overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
          {/* Decorative gradient circle */}
          <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

          {/* Subtitle */}
          <p className="relative z-[1] mb-8 max-w-[800px] text-lg leading-relaxed text-muted-foreground">
            RNLT Labs is the space where emerging technology meets real products. We apply new
            tools before they're widely adopted and test them in production-grade SaaS to move
            faster, build cleaner, and scale earlier.
          </p>

          {/* Strategy Grid */}
          <div className="relative z-[1] grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                className="group/card relative overflow-hidden rounded-lg border bg-secondary p-5 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg"
              >
                {/* Gradient top border (hidden, shows on hover) */}
                <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform group-hover/card:scale-x-100" />

                {/* Icon */}
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-base">
                  {strategy.icon}
                </div>

                {/* Title */}
                <h3 className="mb-1 text-[0.95rem] font-semibold text-foreground">
                  {strategy.title}
                </h3>

                {/* Description */}
                <p className="text-[0.8rem] leading-snug text-muted-foreground">
                  {strategy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
