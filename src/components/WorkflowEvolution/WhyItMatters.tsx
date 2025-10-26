/**
 * Why It Matters Component
 *
 * Explains why Software Engineers should care about AI-powered workflows
 * and who benefits from adopting this approach.
 */

import React from 'react';

export const WhyItMatters: React.FC = () => {
  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl font-semibold">Why This Matters</h3>
      <p className="mb-8 text-lg text-muted-foreground">
        Why Software Engineers should explore AI-powered development workflows
      </p>

      {/* Key Value Propositions - Focused on Engineers */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Focus on What You Love */}
        <div className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          {/* Background Gradient (on hover) */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                ✨
              </div>
              <h4 className="text-lg font-semibold">Focus on What You Love</h4>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Stop writing boilerplate, fixing linting errors, and debugging type issues.
              Let AI handle the repetitive work while you focus on architecture, UX, and solving real problems.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                <span className="text-muted-foreground">More time for creative problem-solving</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                <span className="text-muted-foreground">Less tedious manual work</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                <span className="text-muted-foreground">Higher job satisfaction</span>
              </div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>

        {/* Level Up Your Skills */}
        <div className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          {/* Background Gradient (on hover) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                🚀
              </div>
              <h4 className="text-lg font-semibold">Level Up Your Skills</h4>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              AI-powered workflows aren't replacing developers—they're amplifying them.
              Learn to orchestrate AI agents, design better prompts, and build systems that leverage MCP.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">→</span>
                <span className="text-muted-foreground">Master AI agent orchestration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">→</span>
                <span className="text-muted-foreground">Understand Model Context Protocol</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-blue-500">→</span>
                <span className="text-muted-foreground">Design AI-native systems</span>
              </div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>

        {/* Stay Competitive */}
        <div className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
          {/* Background Gradient (on hover) */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                ⚡
              </div>
              <h4 className="text-lg font-semibold">Stay Competitive</h4>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              The industry is shifting fast. Engineers who understand AI workflows can ship features 8x faster
              with higher quality. Don't get left behind while others move at AI speed.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-orange-500">!</span>
                <span className="text-muted-foreground">12h → 90min per feature</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-orange-500">!</span>
                <span className="text-muted-foreground">98% test coverage automatically</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-orange-500">!</span>
                <span className="text-muted-foreground">Zero security bugs in production</span>
              </div>
            </div>
          </div>

          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        </div>
      </div>

      {/* Who Benefits Section */}
      <div className="mt-8 rounded-lg border bg-muted/30 p-6">
        <h4 className="mb-4 text-xl font-semibold">Who Benefits From This?</h4>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group/benefit relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
            {/* Gradient top border (shows on hover) */}
            <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform group-hover/benefit:scale-x-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/benefit:opacity-10" />
            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl transition-transform duration-300 group-hover/benefit:scale-110">👨‍💻</span>
                <span className="font-semibold">Solo Developers</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Build production-grade apps alone. Compete with teams of 5-10 developers
                by leveraging AI to handle testing, security, and deployment.
              </p>
            </div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/benefit:translate-x-full" />
          </div>
          <div className="group/benefit relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
            {/* Gradient top border (shows on hover) */}
            <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-transform group-hover/benefit:scale-x-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover/benefit:opacity-10" />
            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl transition-transform duration-300 group-hover/benefit:scale-110">🚀</span>
                <span className="font-semibold">Small Teams</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ship faster than well-funded competitors. 2-3 engineers with AI workflows
                can outpace traditional teams of 20+ in both speed and quality.
              </p>
            </div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/benefit:translate-x-full" />
          </div>
          <div className="group/benefit relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
            {/* Gradient top border (shows on hover) */}
            <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform group-hover/benefit:scale-x-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover/benefit:opacity-10" />
            <div className="relative z-10">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl transition-transform duration-300 group-hover/benefit:scale-110">🎯</span>
                <span className="font-semibold">Forward-Thinking Engineers</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Stay ahead of the curve. Learn AI-native workflows now before they become
                the industry standard. Position yourself for the next decade of software development.
              </p>
            </div>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/benefit:translate-x-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
