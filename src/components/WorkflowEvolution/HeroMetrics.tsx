/**
 * Hero Metrics Component - Top-level impact visualization
 */

import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  gradient: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  gradient,
  delay = 0,
}) => {
  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-gradient-to-br p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${gradient})`,
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="relative z-10">
        <div className="mb-2 text-4xl">{icon}</div>
        <h3 className="text-sm font-medium uppercase tracking-wider text-white/80">
          {title}
        </h3>
        <div className="mt-2 text-5xl font-extrabold text-white md:text-6xl">
          {value}
        </div>
        <p className="mt-2 text-sm font-medium text-white/90">{subtitle}</p>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
      </div>
    </div>
  );
};

export const HeroMetrics: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          Workflow Evolution
        </h2>
        <p className="mt-3 text-xl text-muted-foreground">
          From Manual Chaos to AI-Powered Precision
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <MetricCard
          title="Faster"
          value="87.5%"
          subtitle="12h → 90min per feature"
          icon="⚡"
          gradient="var(--gradient-blue-purple, #3b82f6, #9333ea)"
          delay={0}
        />
        <MetricCard
          title="Efficiency"
          value="95%"
          subtitle="20% → 95% automation"
          icon="📈"
          gradient="var(--gradient-green-emerald, #10b981, #059669)"
          delay={100}
        />
        <MetricCard
          title="Timeline"
          value="12mo"
          subtitle="3 major versions"
          icon="🚀"
          gradient="var(--gradient-purple-pink, #9333ea, #ec4899)"
          delay={200}
        />
      </div>
    </div>
  );
};
