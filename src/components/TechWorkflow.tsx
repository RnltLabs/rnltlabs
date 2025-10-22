/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

export function TechWorkflow() {
  const workflow = [
    {
      category: 'Development',
      icon: '💻',
      color: 'from-primary to-primary/80',
      items: [
        'Claude Code as primary development interface',
        'AI-powered code generation & refactoring',
        'React/TypeScript with strict type checking',
        'Modular architecture with reusable components',
      ],
    },
    {
      category: 'Issue Tracking',
      icon: '📋',
      color: 'from-accent to-accent/80',
      items: [
        'Linear for all projects (YC-style workflow)',
        'Done = Shipped to production users',
        'Automated status updates via GitHub integration',
        'Feature branches linked to Linear issues',
      ],
    },
    {
      category: 'Version Control',
      icon: '🌿',
      color: 'from-primary to-primary/80',
      items: [
        'Git branching: main (prod) + develop (staging)',
        'Feature branches: rnlt-<issue>-<description>',
        'Semantic versioning with automated tagging',
        'Clean commit history with descriptive messages',
      ],
    },
    {
      category: 'CI/CD Pipeline',
      icon: '🚀',
      color: 'from-accent to-accent/80',
      items: [
        'GitHub Actions for automated builds & tests',
        'ESLint + TypeScript checks on every PR',
        'Auto-deploy: develop → staging, main → production',
        'Zero-downtime rolling Docker deployments',
      ],
    },
    {
      category: 'Infrastructure',
      icon: '🐳',
      color: 'from-primary to-primary/80',
      items: [
        'Docker containerization for all applications',
        'Docker Hub registry with semantic version tags',
        'Hetzner VPS with Nginx reverse proxy',
        'Dual environment setup (staging + production)',
      ],
    },
    {
      category: 'Monitoring & Analytics',
      icon: '📊',
      color: 'from-accent to-accent/80',
      items: [
        'Discord: 4 channels per project (prod, staging, errors, critical)',
        'GlitchTip error tracking for all environments',
        'Umami Analytics for privacy-friendly usage tracking',
        'Automated deployment notifications with version info',
      ],
    },
  ]

  return (
    <section id="process" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">
          Workflow
        </h2>
        <p className="mb-8 text-lg text-muted-foreground">
          Modern development setup optimized for speed, reliability, and solo productivity.
        </p>

        {/* Workflow Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((section, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Decorative gradient */}
              <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

              {/* Icon & Title */}
              <div className="relative z-[1] mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${section.color} text-xl`}
                >
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{section.category}</h3>
              </div>

              {/* Items List */}
              <ul className="relative z-[1] space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-2 text-3xl font-bold text-primary">2 env</div>
            <div className="text-sm text-muted-foreground">Staging + Production</div>
          </div>
          <div className="rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-2 text-3xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground">Automated deployments</div>
          </div>
          <div className="rounded-xl border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-2 text-3xl font-bold text-primary">0s</div>
            <div className="text-sm text-muted-foreground">Downtime on deploy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
