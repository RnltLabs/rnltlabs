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
  githubUrl?: string
  summary: string
  highlights: {
    label: string
    text: string
  }[]
  gradientFrom: string
  gradientTo: string
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Runicorn',
      status: 'Live',
      link: 'https://runicorn.io/',
      githubUrl: 'https://github.com/RnltLabs/runicorn',
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
          text: 'React/TypeScript, Vite, Leaflet, shadcn/ui, Tailwind CSS',
        },
      ],
      gradientFrom: '#3b82f6',
      gradientTo: '#06b6d4',
    },
    {
      title: 'Massava',
      status: 'Early Stage MVP',
      link: 'https://staging.rnltlabs.de/massava/',
      githubUrl: 'https://github.com/RnltLabs/massava',
      summary:
        'A booking platform for service providers. Streamlines appointment scheduling and reduces administrative overhead.',
      highlights: [
        {
          label: 'Problem',
          text: 'Manual booking management is time-consuming and error-prone for service providers',
        },
        {
          label: 'Solution',
          text: 'Centralized platform for scheduling, notifications, and provider management',
        },
        {
          label: 'Tech Stack',
          text: 'React/TypeScript, NestJS, PostgreSQL · MVP by end of year · 10k+ bookings/day architecture',
        },
      ],
      gradientFrom: '#22c55e',
      gradientTo: '#10b981',
    },
    {
      title: 'Product Development Copilot',
      status: 'Planning',
      summary:
        'A tool for structured product development. Helps transform high-level ideas into actionable steps. Currently in planning phase for personal use.',
      highlights: [
        {
          label: 'Problem',
          text: 'Turning abstract product visions into structured execution plans is slow and fragmented',
        },
        {
          label: 'Solution',
          text: 'AI-powered guidance for product ideation, planning, and execution tracking',
        },
        {
          label: 'Tech Stack',
          text: 'React/TypeScript, NestJS, modular AI agents · Early prototype phase',
        },
      ],
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
    },
  ]

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">Projects</h2>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative mt-8 cursor-pointer overflow-hidden rounded-2xl border bg-card p-10 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Background gradient fade */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              />

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
                      title="Visit App"
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
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-colors hover:text-accent"
                      aria-label="View on GitHub"
                      title="View on GitHub"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
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

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
