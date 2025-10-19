import { NeuralNetworkBackground } from './NeuralNetworkBackground'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-8 py-20">
      {/* Neural Network Background */}
      <NeuralNetworkBackground />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02]" />

      {/* Hero Content */}
      <div className="relative z-[2] flex w-full max-w-[800px] flex-col items-center animate-fadeInUp">
        {/* Main Heading */}
        <h1 className="mb-8 w-full bg-gradient-to-br from-foreground to-primary bg-clip-text text-center text-[clamp(3rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-transparent">
          New tech hits different
          <br />
          when you ship it.
        </h1>

        {/* Subtitle */}
        <p className="mb-12 w-full max-w-[600px] text-center text-xl leading-relaxed text-muted-foreground">
          RNLT Labs transforms emerging technology into production-grade SaaS. We build fast, ship
          weekly, and scale from day one.
        </p>
      </div>

      {/* Scroll Hint */}
      <a
        href="#strategy"
        className="absolute bottom-8 z-[100] inline-block cursor-pointer rounded-lg p-3 text-2xl text-primary transition-colors hover:text-accent focus:text-accent active:text-accent animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
