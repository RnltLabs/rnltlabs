/**
 * MCP Servers Modal - Model Context Protocol integrations
 */

import React from 'react';
import type { MCPServer } from '../types';

interface MCPServersModalProps {
  isOpen: boolean;
  onClose: () => void;
  servers: MCPServer[];
}

export const MCPServersModal: React.FC<MCPServersModalProps> = ({
  isOpen,
  onClose,
  servers,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="mcp-modal-title"
    >
      <div
        className="relative flex max-h-[80vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 border-b bg-background p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2
                id="mcp-modal-title"
                className="text-xl font-bold md:text-2xl"
              >
                🔌 MCP Servers ({servers.length})
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Model Context Protocol integrations for enhanced AI capabilities
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
          {/* Architecture Diagram */}
          <div className="mb-8 rounded-lg border bg-muted/30 p-6">
            <h3 className="mb-4 text-lg font-semibold">MCP Architecture</h3>
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
              {/* AI Agents */}
              <div className="flex flex-col items-center">
                <div className="rounded-lg border-2 border-primary bg-primary/10 p-4">
                  <div className="text-center text-sm font-semibold">
                    AI Agents
                  </div>
                  <div className="mt-2 text-3xl">🤖</div>
                </div>
              </div>

              {/* Connection */}
              <svg
                className="h-8 w-8 rotate-0 text-muted-foreground md:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>

              {/* MCP Layer */}
              <div className="flex flex-col items-center">
                <div className="rounded-lg border-2 border-green-500 bg-green-50 p-4 dark:bg-green-950/20">
                  <div className="text-center text-sm font-semibold text-green-900 dark:text-green-100">
                    MCP Protocol
                  </div>
                  <div className="mt-2 text-3xl">🔌</div>
                </div>
              </div>

              {/* Connection */}
              <svg
                className="h-8 w-8 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>

              {/* External Services */}
              <div className="flex flex-col gap-2">
                <div className="rounded border bg-card px-3 py-2 text-xs">
                  GitHub 🐙
                </div>
                <div className="rounded border bg-card px-3 py-2 text-xs">
                  Database 🗄️
                </div>
                <div className="rounded border bg-card px-3 py-2 text-xs">
                  Search 🔍
                </div>
              </div>
            </div>
          </div>

          {/* Server Details */}
          <div className="grid gap-6 md:grid-cols-2">
            {servers.map((server) => (
              <div
                key={server.id}
                className="overflow-hidden rounded-lg border bg-card shadow-sm"
              >
                {/* Header */}
                <div className="border-b bg-muted/50 p-4">
                  <h3 className="text-lg font-semibold">{server.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {server.purpose}
                  </p>
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Capabilities */}
                  <div className="mb-4">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Capabilities
                    </h4>
                    <ul className="space-y-1.5">
                      {server.capabilities.map((capability, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="mt-0.5 text-green-500">✓</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Integrations */}
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Integrations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {server.integrations.map((integration, index) => (
                        <span
                          key={index}
                          className="rounded-full border bg-muted px-3 py-1 text-xs font-medium"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-8 rounded-lg border bg-primary/5 p-6">
            <h3 className="mb-4 text-lg font-semibold">Why MCP?</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">🚀</div>
                <div>
                  <h4 className="font-semibold">Extensibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Easily add new integrations without modifying core agents
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">🔒</div>
                <div>
                  <h4 className="font-semibold">Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Controlled access to sensitive resources via protocol
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold">Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized context sharing between agents and services
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-2xl">🔄</div>
                <div>
                  <h4 className="font-semibold">Reusability</h4>
                  <p className="text-sm text-muted-foreground">
                    Share MCP servers across multiple agent workflows
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
