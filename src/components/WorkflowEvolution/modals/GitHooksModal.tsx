/**
 * Git Hooks Modal - Automated quality gates
 */

import React from 'react';
import type { GitHook } from '../types';

interface GitHooksModalProps {
  isOpen: boolean;
  onClose: () => void;
  hooks: GitHook[];
}

export const GitHooksModal: React.FC<GitHooksModalProps> = ({
  isOpen,
  onClose,
  hooks,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="hooks-modal-title"
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
                id="hooks-modal-title"
                className="text-xl font-bold md:text-2xl"
              >
                🪝 Git Hooks ({hooks.length})
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Automated quality gates ensuring code excellence at every step
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
          {/* Git Workflow Diagram */}
          <div className="mb-8 rounded-lg border bg-muted/30 p-6">
            <h3 className="mb-4 text-lg font-semibold">Git Workflow</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="rounded-lg bg-card p-3 shadow-sm">
                  <div className="text-sm font-semibold">Code Changes</div>
                </div>
                <div className="my-2 text-2xl">↓</div>
                <div className="rounded-lg border-2 border-blue-500 bg-blue-50 p-3 dark:bg-blue-950/20">
                  <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                    pre-commit
                  </div>
                </div>
                <div className="my-2 text-2xl">↓</div>
                <div className="rounded-lg bg-card p-3 shadow-sm">
                  <div className="text-sm font-semibold">Commit</div>
                </div>
                <div className="my-2 text-2xl">↓</div>
                <div className="rounded-lg border-2 border-purple-500 bg-purple-50 p-3 dark:bg-purple-950/20">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                    commit-msg
                  </div>
                </div>
                <div className="my-2 text-2xl">↓</div>
                <div className="rounded-lg border-2 border-green-500 bg-green-50 p-3 dark:bg-green-950/20">
                  <div className="text-sm font-semibold text-green-900 dark:text-green-100">
                    pre-push
                  </div>
                </div>
                <div className="my-2 text-2xl">↓</div>
                <div className="rounded-lg bg-card p-3 shadow-sm">
                  <div className="text-sm font-semibold">Remote Repo</div>
                </div>
                <div className="my-2 text-2xl">↓</div>
                <div className="rounded-lg border-2 border-amber-500 bg-amber-50 p-3 dark:bg-amber-950/20">
                  <div className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                    post-merge
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hook Details */}
          <div className="space-y-6">
            {hooks.map((hook, index) => {
              const colors = [
                { border: 'border-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20', text: 'text-blue-900 dark:text-blue-100' },
                { border: 'border-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20', text: 'text-purple-900 dark:text-purple-100' },
                { border: 'border-green-500', bg: 'bg-green-50 dark:bg-green-950/20', text: 'text-green-900 dark:text-green-100' },
                { border: 'border-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/20', text: 'text-amber-900 dark:text-amber-100' },
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={hook.id}
                  className="overflow-hidden rounded-lg border bg-card shadow-sm"
                >
                  {/* Header */}
                  <div className={`border-b p-4 ${color.bg}`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-semibold ${color.text}`}>
                        {hook.name}
                      </h3>
                      <span className={`rounded-full border px-3 py-1 text-xs font-medium ${color.border}`}>
                        {hook.trigger}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Actions */}
                    <div className="mb-4">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Automated Actions
                      </h4>
                      <ul className="space-y-2">
                        {hook.actions.map((action, actionIndex) => (
                          <li
                            key={actionIndex}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="mt-0.5 text-primary">▸</span>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className={`rounded-lg border p-4 ${color.border} ${color.bg}`}>
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">💡</div>
                        <div>
                          <h4 className={`mb-1 text-sm font-semibold ${color.text}`}>
                            Impact
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {hook.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mt-8 rounded-lg border bg-primary/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Benefits of Git Hooks</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">🛡️</div>
                <div>
                  <h4 className="font-semibold">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Automatically enforce code quality standards before commits
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold">Fast Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Catch issues immediately, not after CI/CD pipeline
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">🔒</div>
                <div>
                  <h4 className="font-semibold">Security Gates</h4>
                  <p className="text-sm text-muted-foreground">
                    Prevent sensitive data and security vulnerabilities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">📝</div>
                <div>
                  <h4 className="font-semibold">Consistency</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintain uniform code style and commit conventions
                  </p>
                </div>
              </div>
            </div>
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
