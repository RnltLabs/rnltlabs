/**
 * Workflow Phases Modal - Detailed workflow breakdown
 */

import React from 'react';
import type { WorkflowPhase } from '../types';

interface WorkflowPhasesModalProps {
  isOpen: boolean;
  onClose: () => void;
  phases: WorkflowPhase[];
}

export const WorkflowPhasesModal: React.FC<WorkflowPhasesModalProps> = ({
  isOpen,
  onClose,
  phases,
}) => {
  if (!isOpen) return null;

  const averageCoverage = Math.round(
    phases.reduce((sum, phase) => sum + phase.aiCoverage, 0) / phases.length
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="phases-modal-title"
    >
      <div
        className="relative flex max-h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-background shadow-2xl md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 border-b bg-background p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="phases-modal-title"
                className="text-xl font-bold md:text-2xl"
              >
                📊 Workflow Phases ({phases.length})
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                End-to-end development lifecycle with {averageCoverage}% average AI
                coverage
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 pb-6 md:p-6 md:pb-8">
          {/* Workflow Flowchart */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex items-center gap-2 pb-4">
              {phases.map((phase, index) => (
                <React.Fragment key={phase.name}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`
                        flex h-20 w-32 flex-col items-center justify-center
                        rounded-lg border-2 shadow-sm transition-all
                        ${
                          phase.aiCoverage >= 80
                            ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                            : phase.aiCoverage >= 50
                            ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/20'
                            : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                        }
                      `}
                    >
                      <div className="text-xs font-semibold">{phase.name}</div>
                      <div className="mt-1 text-lg font-bold text-primary">
                        {phase.aiCoverage}%
                      </div>
                    </div>
                  </div>
                  {index < phases.length - 1 && (
                    <svg
                      className="h-8 w-8 flex-shrink-0 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Phase Details */}
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <div
                key={phase.name}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{phase.name}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {phase.aiCoverage}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      AI Coverage
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                      style={{ width: `${phase.aiCoverage}%` }}
                    />
                  </div>
                </div>

                {/* Examples */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Examples
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.examples.map((example, exIndex) => (
                      <span
                        key={exIndex}
                        className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t bg-muted/50 p-4 text-center text-sm text-muted-foreground">
          Press <kbd className="rounded bg-background px-2 py-1 font-mono text-xs">ESC</kbd> or
          click outside to close
        </div>
      </div>
    </div>
  );
};
