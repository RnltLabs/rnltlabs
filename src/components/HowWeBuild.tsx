export function HowWeBuild() {
  const steps = [
    {
      title: 'Spot the opportunity',
      description:
        'Identify high-impact problems and market gaps through research, observation, and analysis.',
    },
    {
      title: 'Validate fast',
      description:
        'Define and confirm the smallest valuable workflow with lean prototypes or mock flows.',
    },
    {
      title: 'Adopt early tech',
      description:
        "Research and integrate emerging tools before they're mainstream to accelerate development and gain an innovation edge.",
    },
    {
      title: 'Deploy modular AI subagents',
      description:
        'Configure task-specific agents with custom prompts, tool permissions, and separate contexts to maximize build speed, accuracy, and workflow clarity.',
    },
    {
      title: 'Build lean & production-first',
      description:
        'Implement core workflows with clean, testable architecture, ready for live deployment from day one.',
    },
    {
      title: 'Test in production',
      description: 'Launch early, gather real usage data, and refine based on live metrics.',
    },
    {
      title: 'Iterate weekly',
      description:
        'Ship small, continuous improvements driven by metrics, feedback, and new tech opportunities.',
    },
    {
      title: 'Scale intelligently',
      description: 'Optimize speed, reliability, and developer experience as adoption grows.',
    },
    {
      title: 'Maintain & evolve',
      description: 'Keep products relevant by integrating promising tech and refining workflows.',
    },
  ]

  return (
    <section id="process" className="bg-background py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">How We Build</h2>

        {/* Main Card */}
        <div className="group relative mt-8 overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
          {/* Decorative gradient circle */}
          <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

          {/* Timeline Container */}
          <div className="relative mx-auto max-w-[650px] pb-8 pt-12" style={{ minHeight: '700px' }}>
            {/* Vertical Line */}
            <div
              className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-border to-muted"
              style={{ bottom: '80px' }}
            />

            {/* Timeline Steps */}
            {steps.map((step, index) => {
              const isOdd = index % 2 === 0
              const topPosition = index * 75

              return (
                <div
                  key={index}
                  className="absolute w-[48%]"
                  style={{
                    top: `${topPosition}px`,
                    [isOdd ? 'left' : 'right']: '52%',
                  }}
                >
                  {/* Step Content Card */}
                  <div className="group/step relative z-[1] rounded-lg border bg-card px-4 py-3 shadow-sm transition-all hover:z-10 hover:scale-105 hover:shadow-xl">
                    <h3 className="mb-1 text-sm font-semibold text-foreground">{step.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className="absolute top-1/2 z-[3] h-3 w-3 -translate-y-1/2 rounded-full border-[3px] border-background bg-muted transition-all group-hover/step:scale-125 group-hover/step:bg-primary"
                    style={{
                      [isOdd ? 'left' : 'right']: '-6.5%',
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
