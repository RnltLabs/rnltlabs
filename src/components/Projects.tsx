/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

interface Project {
  title: string
  status: string
  link?: string
  summary: string
  highlights: {
    label: string
    text: string
  }[]
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Runicorn',
      status: 'Live',
      link: 'https://runicorn.io/',
      summary:
        'A GPS art drawing tool for runners and cyclists. Draw creative routes, export GPX files, and share your runs on fitness platforms. Built with React, TypeScript, and Leaflet.',
      highlights: [
        {
          label: 'Problem',
          text: 'Creating artistic GPS routes requires manual planning and is time-consuming',
        },
        {
          label: 'Solution',
          text: 'Interactive map-based drawing tool with GPX export, real-time stats, and multiple map styles',
        },
        {
          label: 'Tech Stack',
          text: 'React/TypeScript, Vite, Leaflet, shadcn/ui, Tailwind CSS · CI/CD with GitHub Actions',
        },
      ],
    },
    {
      title: 'Aggregation Platform',
      status: 'Early Stage MVP',
      link: 'https://staging.rnltlabs.de/massava/',
      summary:
        'A SaaS platform designed to unify fragmented booking workflows, reducing administrative load for providers and improving discovery for end users.',
      highlights: [
        {
          label: 'Problem',
          text: 'Disconnected booking tools slow operations and limit client acquisition',
        },
        {
          label: 'Approach',
          text: 'React/TypeScript, NestJS, modular subagents for onboarding, scheduling, notifications',
        },
        {
          label: 'Targets',
          text: 'MVP by end of year · 10k+ bookings/day design · Weekly deploys',
        },
      ],
    },
    {
      title: 'Product Development Copilot',
      status: 'In Development',
      summary:
        'A platform concept aimed at supporting structured product lifecycles (PDLC), helping transform high-level ideas into actionable outcomes. Currently intended for personal use only.',
      highlights: [
        {
          label: 'Problem',
          text: 'Turning abstract product visions into structured, manageable steps is often slow and fragmented',
        },
        {
          label: 'Approach',
          text: 'React/TypeScript, NestJS, modular agents for guidance, planning, and execution support',
        },
        {
          label: 'Targets',
          text: 'Early prototype for personal workflows · Scalable foundation for potential expansion',
        },
      ],
    },
  ]

  return (
    <section id="projects" className="bg-secondary py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">Projects</h2>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative mt-8 cursor-pointer overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Decorative gradient circle */}
              <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

              {/* Project Header */}
              <div className="relative z-[1] mb-6 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-[1.75rem] font-semibold text-foreground">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-colors hover:text-accent"
                      aria-label="Visit project"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
                <span
                  className={`inline-block whitespace-nowrap rounded-full border px-3 py-1 text-[0.8rem] font-medium ${
                    project.status === 'Live'
                      ? 'border-accent bg-accent/5 text-accent'
                      : 'border-primary bg-primary/5 text-primary'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Project Summary */}
              <p className="relative z-[1] mb-6 text-[1.05rem] leading-relaxed text-muted-foreground">
                {project.summary}
              </p>

              {/* Project Highlights */}
              <ul className="relative z-[1] space-y-0">
                {project.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className={`py-4 text-[0.95rem] text-muted-foreground ${
                      hIndex === 0 ? 'pt-0' : 'border-t'
                    }`}
                  >
                    <strong className="font-medium text-foreground">{highlight.label}:</strong>{' '}
                    {highlight.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
