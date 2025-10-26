/**
 * Workflow Comparison Component - Before/After visualization
 */

import React from 'react';
import type { WorkflowVersion } from './types';

interface WorkflowComparisonProps {
  selectedVersion: WorkflowVersion;
  baselineVersion: WorkflowVersion;
}

interface ComparisonRow {
  icon: string;
  before: string;
  after: string;
  improvement: boolean;
}

export const WorkflowComparison: React.FC<WorkflowComparisonProps> = ({
  selectedVersion,
  baselineVersion,
}) => {
  const comparisons: ComparisonRow[] = [
    {
      icon: '👤',
      before: 'Manual code review',
      after: '12 AI agents automate reviews',
      improvement: true,
    },
    {
      icon: '📝',
      before: 'Manual testing',
      after: 'Auto test generation (98% coverage)',
      improvement: true,
    },
    {
      icon: '🐛',
      before: `${baselineVersion.features.securityBugs} security bugs`,
      after: `${selectedVersion.features.securityBugs} security bugs`,
      improvement: true,
    },
    {
      icon: '⏱️',
      before: `${baselineVersion.timePerFeature} per feature`,
      after: `${selectedVersion.timePerFeature} per feature`,
      improvement: true,
    },
    {
      icon: '📊',
      before: `${baselineVersion.efficiency}% efficiency`,
      after: `${selectedVersion.efficiency}% efficiency`,
      improvement: true,
    },
  ];

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold">
          Selected: {selectedVersion.name}{' '}
          <span className="text-primary">({selectedVersion.efficiency}% Efficiency)</span>
        </h3>
      </div>

      {/* Before/After Comparison */}
      <div className="overflow-hidden rounded-lg border bg-card shadow-md">
        <div className="grid md:grid-cols-2">
          {/* Before Column */}
          <div className="border-b bg-red-50/50 p-6 dark:bg-red-950/10 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-full bg-red-100 p-2 dark:bg-red-900/30">
                <span className="text-xl">📉</span>
              </div>
              <h4 className="text-lg font-semibold text-red-900 dark:text-red-100">
                BEFORE ({baselineVersion.name})
              </h4>
            </div>
            <ul className="space-y-3">
              {comparisons.map((comp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl">{comp.icon}</span>
                  <span className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {comp.before}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After Column */}
          <div className="bg-green-50/50 p-6 dark:bg-green-950/10">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-full bg-green-100 p-2 dark:bg-green-900/30">
                <span className="text-xl">📈</span>
              </div>
              <h4 className="text-lg font-semibold text-green-900 dark:text-green-100">
                AFTER ({selectedVersion.name})
              </h4>
            </div>
            <ul className="space-y-3">
              {comparisons.map((comp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="flex-1 text-sm font-medium leading-relaxed">
                    {comp.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Workflow Phase Visualization */}
      <div className="mt-8 rounded-lg border bg-card p-6 shadow-md">
        <h4 className="mb-6 text-lg font-semibold">
          Workflow Phase Automation
        </h4>
        <div className="space-y-4">
          {selectedVersion.phases.map((phase) => (
            <div key={phase.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium">{phase.name}</span>
                <span className="text-muted-foreground">
                  {phase.aiCoverage}% AI coverage
                </span>
              </div>
              <div className="relative h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-1000 ease-out"
                  style={{
                    width: `${phase.aiCoverage}%`,
                  }}
                  role="progressbar"
                  aria-valuenow={phase.aiCoverage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${phase.name} AI coverage: ${phase.aiCoverage}%`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {selectedVersion.phases.length}
            </div>
            <div className="text-xs text-muted-foreground">Total Phases</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {Math.round(
                selectedVersion.phases.reduce(
                  (sum, phase) => sum + phase.aiCoverage,
                  0
                ) / selectedVersion.phases.length
              )}%
            </div>
            <div className="text-xs text-muted-foreground">Avg Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {selectedVersion.features.agents}
            </div>
            <div className="text-xs text-muted-foreground">AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">
              {selectedVersion.timePerFeature}
            </div>
            <div className="text-xs text-muted-foreground">Per Feature</div>
          </div>
        </div>
      </div>
    </div>
  );
};
