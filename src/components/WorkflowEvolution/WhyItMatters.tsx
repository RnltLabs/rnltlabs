/**
 * Why It Matters Component
 *
 * Explains the value and relevance of AI-powered development workflows,
 * highlighting business impact, competitive advantages, and future readiness.
 */

import React from 'react';

export const WhyItMatters: React.FC = () => {
  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl font-semibold">Why This Matters</h3>
      <p className="mb-8 text-lg text-muted-foreground">
        AI-powered development workflows aren't just faster—they're fundamentally changing how software gets built
      </p>

      {/* Key Value Propositions */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Speed & Efficiency */}
        <div className="rounded-lg border bg-card p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-2xl">
              ⚡
            </div>
            <h4 className="text-lg font-semibold">8x Faster Development</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            What took 12 hours now takes 90 minutes. Ship features in the same day they're planned,
            iterate rapidly, and respond to market changes in real-time.
          </p>
          <div className="rounded bg-muted/50 p-3 text-sm">
            <div className="font-semibold text-green-600 dark:text-green-400">Real Impact:</div>
            <div className="text-muted-foreground">
              Launch MVPs in weeks, not months. Test ideas before competitors even start planning.
            </div>
          </div>
        </div>

        {/* Quality & Reliability */}
        <div className="rounded-lg border bg-card p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-2xl">
              🛡️
            </div>
            <h4 className="text-lg font-semibold">Zero Security Bugs</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            AI agents review every line of code for security vulnerabilities, performance issues,
            and accessibility compliance before it reaches production.
          </p>
          <div className="rounded bg-muted/50 p-3 text-sm">
            <div className="font-semibold text-blue-600 dark:text-blue-400">Real Impact:</div>
            <div className="text-muted-foreground">
              From 12 security incidents/year to zero. 98% test coverage prevents production bugs.
            </div>
          </div>
        </div>

        {/* Cost Reduction */}
        <div className="rounded-lg border bg-card p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-2xl">
              💰
            </div>
            <h4 className="text-lg font-semibold">75% Cost Reduction</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Automate repetitive tasks, reduce bug fixes, eliminate manual testing, and minimize
            deployment failures. More features, fewer developers needed.
          </p>
          <div className="rounded bg-muted/50 p-3 text-sm">
            <div className="font-semibold text-purple-600 dark:text-purple-400">Real Impact:</div>
            <div className="text-muted-foreground">
              Small teams compete with large enterprises. Bootstrap companies move like giants.
            </div>
          </div>
        </div>

        {/* Competitive Advantage */}
        <div className="rounded-lg border bg-card p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-2xl">
              🏆
            </div>
            <h4 className="text-lg font-semibold">Market Leadership</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            First-mover advantage in AI-powered development. While competitors manually code,
            you ship features at unprecedented speed with higher quality.
          </p>
          <div className="rounded bg-muted/50 p-3 text-sm">
            <div className="font-semibold text-orange-600 dark:text-orange-400">Real Impact:</div>
            <div className="text-muted-foreground">
              Capture market share by being first. Iterate faster than anyone can copy you.
            </div>
          </div>
        </div>

        {/* Developer Experience */}
        <div className="rounded-lg border bg-card p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/10 text-2xl">
              ✨
            </div>
            <h4 className="text-lg font-semibold">Focus on What Matters</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Developers spend time on architecture, UX, and business logic—not debugging, writing tests,
            or fixing linting errors. AI handles the tedious work.
          </p>
          <div className="rounded bg-muted/50 p-3 text-sm">
            <div className="font-semibold text-pink-600 dark:text-pink-400">Real Impact:</div>
            <div className="text-muted-foreground">
              Higher job satisfaction, better retention, and more creative problem-solving.
            </div>
          </div>
        </div>

        {/* Future Readiness */}
        <div className="rounded-lg border bg-card p-6 shadow-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-2xl">
              🚀
            </div>
            <h4 className="text-lg font-semibold">Future-Proof Stack</h4>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Built on MCP (Model Context Protocol), the workflow adapts as AI models improve.
            Every new model capability automatically enhances your development speed.
          </p>
          <div className="rounded bg-muted/50 p-3 text-sm">
            <div className="font-semibold text-cyan-600 dark:text-cyan-400">Real Impact:</div>
            <div className="text-muted-foreground">
              No rewrite needed. Your workflow gets smarter as AI advances, not outdated.
            </div>
          </div>
        </div>
      </div>

      {/* The Bottom Line */}
      <div className="mt-8 rounded-lg border-2 border-primary bg-primary/5 p-8">
        <h4 className="mb-4 text-2xl font-bold">The Bottom Line</h4>
        <div className="space-y-4">
          <p className="text-lg">
            Traditional development workflows are like using horses when cars exist.
            AI-powered workflows aren't just an optimization—they're a fundamental shift.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-background p-4">
              <div className="mb-2 font-semibold text-red-600 dark:text-red-400">
                Traditional Teams (Manual)
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 2-4 weeks to ship a feature</li>
                <li>• 45% test coverage, frequent bugs</li>
                <li>• Manual code reviews miss issues</li>
                <li>• Reactive security fixes</li>
                <li>• Teams scale linearly with work</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="mb-2 font-semibold text-green-600 dark:text-green-400">
                AI-Powered Teams
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Same day feature deployment</li>
                <li>• 98% test coverage, zero security bugs</li>
                <li>• 12 AI agents catch everything</li>
                <li>• Proactive security scanning</li>
                <li>• Teams 10x productivity per person</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 rounded-lg bg-gradient-to-r from-primary/20 to-primary/10 p-6 text-center">
            <p className="text-xl font-semibold">
              Companies using AI workflows don't just move faster—they're playing a different game entirely.
            </p>
          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="mt-8 rounded-lg border bg-card p-6 shadow-md">
        <h4 className="mb-4 text-xl font-semibold">Who Should Adopt This?</h4>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <div className="mb-2 font-semibold">🚀 Startups</div>
            <p className="text-sm text-muted-foreground">
              Compete with funded competitors. Ship faster with smaller teams. Prove product-market fit before running out of runway.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold">🏢 Enterprises</div>
            <p className="text-sm text-muted-foreground">
              Reduce development costs by 75%. Improve code quality and security. Scale innovation without scaling headcount.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold">👨‍💻 Solo Developers</div>
            <p className="text-sm text-muted-foreground">
              Build like a team. Ship production-grade features daily. Focus on product, not boilerplate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
