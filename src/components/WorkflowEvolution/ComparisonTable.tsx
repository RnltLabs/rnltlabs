/**
 * Comparison Table Component - Balanced design matching RNLT Labs style
 */

import React from 'react';
import type { WorkflowVersion } from './types';

interface ComparisonTableProps {
  versions: WorkflowVersion[];
  onClose: () => void;
}

// Period mapping for versions
const periodMap: Record<string, string> = {
  v0: 'Pre-Oct 2024',
  v1: 'Oct 2024 - Oct 2025',
  v2: 'Oct 2025 - Present',
};

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ versions, onClose }) => {
  // Metric definitions with emojis (matching RNLT style)
  const metrics = [
    { key: 'efficiency' as const, label: 'Efficiency', emoji: '⚡', isPercent: true },
    { key: 'timePerFeature' as const, label: 'Time per Feature', emoji: '⏱️', isPercent: false },
    { key: 'testCoverage' as const, label: 'Test Coverage', emoji: '🧪', isPercent: true },
    { key: 'deploySuccess' as const, label: 'Deploy Success', emoji: '✅', isPercent: true },
    { key: 'agents' as const, label: 'AI Agents', emoji: '🤖', isPercent: false },
    { key: 'phases' as const, label: 'Workflow Phases', emoji: '📊', isPercent: false },
    { key: 'mcpServers' as const, label: 'MCP Servers', emoji: '🔌', isPercent: false },
    { key: 'hooks' as const, label: 'Automation Hooks', emoji: '🪝', isPercent: false },
  ];

  // Extract values from version based on metric key
  const getValue = (version: WorkflowVersion, key: string): number | string => {
    switch (key) {
      case 'efficiency':
        return version.efficiency;
      case 'timePerFeature':
        return version.timePerFeature;
      case 'testCoverage':
        return version.features.testCoverage;
      case 'deploySuccess':
        return Math.min(Math.round(version.efficiency * 0.95), 99);
      case 'agents':
        return version.features.agents;
      case 'phases':
        return version.features.phases;
      case 'mcpServers':
        return version.features.mcpServers;
      case 'hooks':
        return version.features.hooks;
      default:
        return 0;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60" onClick={onClose}>
      <div className="min-h-screen px-4 py-8 md:py-12">
        <div className="mx-auto max-w-6xl" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="mb-8 rounded-xl border bg-card p-6 shadow-lg md:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-semibold text-foreground">
                  Technical Comparison
                </h2>
                <p className="text-muted-foreground">
                  Side-by-side metrics across all workflow versions
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg border bg-secondary p-2 transition-all hover:-translate-y-0.5 hover:shadow-md"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Comparison Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {versions.map((version, versionIndex) => {
              let accentColor = 'text-yellow-500';
              let bgColor = 'bg-yellow-500/10';

              if (version.efficiency < 40) {
                accentColor = 'text-red-500';
                bgColor = 'bg-red-500/10';
              }
              if (version.efficiency > 70) {
                accentColor = 'text-green-500';
                bgColor = 'bg-green-500/10';
              }

              const versionNumber = version.id === 'v0' ? '0.1' : version.id === 'v1' ? '1.0' : '2.0';
              const period = periodMap[version.id] || 'Unknown';

              return (
                <div
                  key={version.id}
                  className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Subtle hover gradient */}
                  <div className={`pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent opacity-0 transition-opacity group-hover:opacity-100 ${bgColor}`} />

                  {/* Header */}
                  <div className={`relative border-b p-6 ${bgColor}`}>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold text-muted-foreground">
                        VERSION {versionNumber}
                      </span>
                      {versionIndex === versions.length - 1 && (
                        <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <h3 className="mb-1 text-xl font-semibold text-foreground">
                      {version.name}
                    </h3>
                    <div className="text-sm text-muted-foreground">{period}</div>

                    {/* Hero Metric */}
                    <div className="mt-4">
                      <div className={`text-5xl font-bold ${accentColor}`}>
                        {version.efficiency}%
                      </div>
                      <div className="mt-1 text-xs font-medium text-muted-foreground">
                        Efficiency Score
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="relative space-y-3 p-6">
                    {metrics.map((metric) => {
                      const value = getValue(version, metric.key);
                      const displayValue = metric.isPercent && typeof value === 'number'
                        ? `${value}%`
                        : value;

                      return (
                        <div
                          key={metric.key}
                          className="flex items-center justify-between rounded-lg border bg-secondary p-3 transition-colors hover:bg-secondary/70"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{metric.emoji}</span>
                            <span className="text-sm font-medium text-muted-foreground">
                              {metric.label}
                            </span>
                          </div>
                          <span className="font-semibold text-foreground">
                            {displayValue}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Insights */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Efficiency Improvement */}
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-3 text-3xl">📈</div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Efficiency Improvement
              </h3>
              <p className="text-sm text-muted-foreground">
                Jumped from {versions[0].efficiency}% to {versions[versions.length - 1].efficiency}% -
                a {versions[versions.length - 1].efficiency - versions[0].efficiency}% increase through AI automation
              </p>
            </div>

            {/* Time Savings */}
            <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-3 text-3xl">⚡</div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Delivery Speed
              </h3>
              <p className="text-sm text-muted-foreground">
                Reduced from {versions[0].timePerFeature} to {versions[versions.length - 1].timePerFeature} -
                delivering features 4-6x faster with AI assistance
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Close Comparison</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
