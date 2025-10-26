/**
 * Timeline Navigator Component - Collapsible cards with expand/collapse
 */

import React, { useState } from 'react';
import type { WorkflowVersion } from './types';

interface TimelineNavigatorProps {
  versions: WorkflowVersion[];
}

// Period mapping for versions
const periodMap: Record<string, string> = {
  v0: 'Pre-Oct 2024',
  v1: 'Oct 2024 - Oct 2025',
  v2: 'Oct 2025 - Present',
};

export const TimelineNavigator: React.FC<TimelineNavigatorProps> = ({
  versions,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Metric definitions with emojis
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
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="workflow-details">
        {versions.map((version, versionIndex) => {
          const isLast = versionIndex === versions.length - 1;

          // Color scheme based on efficiency
          let accentColor = 'text-yellow-500';
          let bgColor = 'bg-yellow-500/10';
          let borderColor = 'border-yellow-500/30';

          if (version.efficiency < 40) {
            accentColor = 'text-red-500';
            bgColor = 'bg-red-500/10';
            borderColor = 'border-red-500/30';
          }
          if (version.efficiency > 70) {
            accentColor = 'text-green-500';
            bgColor = 'bg-green-500/10';
            borderColor = 'border-green-500/30';
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

              {/* Header - Always visible */}
              <div className={`relative border-b p-5 ${bgColor}`}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-muted-foreground">
                    VERSION {versionNumber}
                  </span>
                  {isLast && (
                    <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">
                      CURRENT
                    </span>
                  )}
                </div>
                <h3 className="mb-1 text-xl font-semibold text-foreground">
                  {version.name}
                </h3>
                <div className="text-sm text-muted-foreground">{period}</div>

                {/* Efficiency Score */}
                <div className="mt-4">
                  <div className={`text-4xl font-bold ${accentColor}`}>
                    {version.efficiency}%
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    Efficiency Score
                  </div>
                </div>
              </div>

              {/* Expanded Details - Conditional */}
              {isExpanded && (
                <div className="relative space-y-3 p-5 pb-6">
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
              )}
            </div>
          );
        })}
      </div>

      {/* Expand/Collapse Toggle - Centered Below Cards */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group inline-flex items-center gap-2 rounded-lg border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/20"
          aria-expanded={isExpanded}
          aria-controls="workflow-details"
          type="button"
        >
          <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
          <svg
            className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

    </div>
  );
};
