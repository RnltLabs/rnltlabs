/**
 * Timeline Navigator Component - Compact horizontal layout
 */

import React from 'react';
import type { WorkflowVersion } from './types';

interface TimelineNavigatorProps {
  versions: WorkflowVersion[];
  onShowComparison: () => void;
}

// Period mapping for versions
const periodMap: Record<string, string> = {
  v0: 'Pre-Oct 2024',
  v1: 'Oct 2024 - Oct 2025',
  v2: 'Oct 2025 - Present',
};

export const TimelineNavigator: React.FC<TimelineNavigatorProps> = ({
  versions,
  onShowComparison,
}) => {
  return (
    <div className="mb-12">
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="mb-2 text-[2.5rem] font-semibold text-foreground">
          Workflow Evolution
        </h2>
        <p className="text-lg text-muted-foreground">
          From manual processes to AI-powered automation
        </p>
      </div>

      {/* Horizontal Version Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {versions.map((version, index) => {
          const isLast = index === versions.length - 1;

          // Color scheme based on efficiency
          let accentColor = 'text-yellow-500';
          let bgColor = 'bg-yellow-500/10';
          let borderColor = 'border-yellow-500/30';
          let dotBg = 'bg-yellow-500';

          if (version.efficiency < 40) {
            accentColor = 'text-red-500';
            bgColor = 'bg-red-500/10';
            borderColor = 'border-red-500/30';
            dotBg = 'bg-red-500';
          }
          if (version.efficiency > 70) {
            accentColor = 'text-green-500';
            bgColor = 'bg-green-500/10';
            borderColor = 'border-green-500/30';
            dotBg = 'bg-green-500';
          }

          const versionNumber = version.id === 'v0' ? '0.1' : version.id === 'v1' ? '1.0' : '2.0';
          const period = periodMap[version.id] || 'Unknown';

          return (
            <div
              key={version.id}
              className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Subtle hover gradient */}
              <div className={`pointer-events-none absolute right-0 top-0 h-[80px] w-[80px] translate-x-[20px] translate-y-[-20px] rounded-full bg-gradient-to-br from-transparent opacity-0 transition-opacity group-hover:opacity-100 ${bgColor}`} />

              <div className="relative p-5">
                {/* Header */}
                <div className="mb-4">
                  {/* Period Badge */}
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    <div className={`h-1.5 w-1.5 rounded-full ${dotBg}`} />
                    {period}
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-xl font-semibold text-foreground">
                    {version.name}
                  </h3>

                  {/* Version & Status */}
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-semibold ${accentColor}`}>
                      v{versionNumber}
                    </span>
                    {isLast && (
                      <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                {/* Efficiency Score */}
                <div className={`mb-4 rounded-lg border p-3 text-center ${borderColor} ${bgColor}`}>
                  <div className={`text-3xl font-bold ${accentColor}`}>
                    {version.efficiency}%
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    Efficiency
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg border bg-secondary p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">⏱️</span>
                      <span className="text-xs text-muted-foreground">Time</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {version.timePerFeature}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border bg-secondary p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🧪</span>
                      <span className="text-xs text-muted-foreground">Tests</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {version.features.testCoverage}%
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border bg-secondary p-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🤖</span>
                      <span className="text-xs text-muted-foreground">AI Agents</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {version.features.agents}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Progress</span>
                    <span className="text-xs text-muted-foreground">{version.efficiency}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full transition-all duration-500 ${dotBg}`}
                      style={{ width: `${version.efficiency}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show Comparison Button */}
      <div className="mt-6 text-center">
        <button
          onClick={onShowComparison}
          className="group inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          <span>Show Technical Comparison</span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
