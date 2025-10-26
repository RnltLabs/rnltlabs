/**
 * AI Agents Modal - Detailed view of all AI agents
 */

import React from 'react';
import type { AIAgent } from '../types';

interface AIAgentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  agents: AIAgent[];
}

export const AIAgentsModal: React.FC<AIAgentsModalProps> = ({
  isOpen,
  onClose,
  agents,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="agents-modal-title"
    >
      <div
        className="relative max-h-[calc(100vh-140px)] w-full max-w-6xl overflow-hidden rounded-lg bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 border-b bg-background p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="agents-modal-title"
                className="text-2xl font-bold"
              >
                🤖 AI Agents ({agents.length})
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Specialized agents automating the entire development workflow
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
        <div className="overflow-y-auto p-6 pb-24" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="group overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                {/* Icon & Name */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="text-4xl">{agent.icon}</div>
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {agent.role}
                  </div>
                </div>

                {/* Name */}
                <h3 className="mb-2 text-lg font-semibold">{agent.name}</h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {agent.description}
                </p>

                {/* Capabilities */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-1">
                    {agent.capabilities.map((capability, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="mt-0.5 text-primary">•</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
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
