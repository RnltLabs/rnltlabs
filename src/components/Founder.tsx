/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

export function Founder() {
  return (
    <section id="founder" className="bg-secondary py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">Founder</h2>

        {/* Founder Card */}
        <div className="group relative mt-8 overflow-hidden rounded-2xl border bg-card p-10 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          {/* Background gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          {/* Decorative gradient circle */}
          <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

          {/* Founder Content */}
          <div className="relative z-[1]">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              {/* Left: Avatar + Name */}
              <div className="flex shrink-0 flex-col items-center">
                <div className="mb-4 shrink-0">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/founder-roman-reinelt-150.webp 1x, /images/founder-roman-reinelt-300.webp 2x"
                    />
                    <img
                      src="/images/founder-roman-reinelt.jpg"
                      alt="Roman Reinelt, Founder of RNLT Labs"
                      width="150"
                      height="150"
                      loading="lazy"
                      className="h-[150px] w-[150px] rounded-full border-[3px] border-secondary object-cover shadow-md"
                    />
                  </picture>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 text-2xl font-semibold text-foreground">Roman Reinelt</div>
                  <div className="text-[0.95rem] text-primary">Founder</div>
                </div>
              </div>

              {/* Right: Bio Text */}
              <div className="flex min-h-[220px] flex-1 flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I run RNLT Labs to build products that solve real problems for real people -
                    spotting gaps others overlook, exploring underserved niches, broken workflows,
                    and opportunities hiding in plain sight.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    What drives me is the entire product journey: understanding problems, shaping
                    ideas, designing solutions, building, testing, and launching production-ready
                    products with focus and velocity. I dive into emerging technologies early to
                    learn how they can accelerate delivery and keep me ahead of the curve.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    This is not about freelancing or client work. RNLT Labs is where I pursue my own
                    ideas, explore bold concepts, push technical boundaries, and take full ownership
                    from concept to launch.
                  </p>
                </div>

                {/* Founder Info */}
                <div className="relative -mb-10 -ml-10 -mr-10 mt-6 border-t pb-10 pt-6 text-center text-sm text-muted-foreground">
                  Master's student in Business Informatics · Based in Karlsruhe, Germany
                </div>
              </div>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>
      </div>
    </section>
  )
}
