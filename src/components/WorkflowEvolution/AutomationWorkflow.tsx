/**
 * Automation Workflow Component
 *
 * Shows the complete integration flow between GitHub, Linear, Hetzner,
 * MCP servers, and AI agents in the automated development workflow.
 */

import React from 'react';

export const AutomationWorkflow: React.FC = () => {
  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl font-semibold">Complete Automation Flow</h3>
      <p className="mb-8 text-muted-foreground">
        How GitHub, Linear, Hetzner, and MCP servers work together to create a fully automated development workflow
      </p>

      {/* Technology Stack Overview */}
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="group relative overflow-hidden rounded-lg border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
          <div className="relative z-10">
            <div className="mb-2 text-3xl transition-transform duration-300 group-hover/card:scale-110">📋</div>
            <div className="font-semibold">Linear</div>
            <div className="text-xs text-muted-foreground">Issue Tracking</div>
          </div>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
        </div>
        <div className="group relative overflow-hidden rounded-lg border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
          <div className="relative z-10">
            <div className="mb-2 text-3xl transition-transform duration-300 group-hover/card:scale-110">🐙</div>
            <div className="font-semibold">GitHub</div>
            <div className="text-xs text-muted-foreground">Version Control</div>
          </div>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
        </div>
        <div className="group relative overflow-hidden rounded-lg border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
          <div className="relative z-10">
            <div className="mb-2 text-3xl transition-transform duration-300 group-hover/card:scale-110">🚀</div>
            <div className="font-semibold">Hetzner</div>
            <div className="text-xs text-muted-foreground">Hosting & Deploy</div>
          </div>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
        </div>
        <div className="group relative overflow-hidden rounded-lg border bg-card p-4 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
          <div className="relative z-10">
            <div className="mb-2 text-3xl transition-transform duration-300 group-hover/card:scale-110">🔌</div>
            <div className="font-semibold">MCP</div>
            <div className="text-xs text-muted-foreground">AI Integration</div>
          </div>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
        </div>
      </div>

      {/* Main Workflow Diagram */}
      <div className="group relative overflow-hidden rounded-lg border bg-card p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
        {/* Workflow Steps */}
        <div className="space-y-6">
          {/* Step 1: Planning */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold">Planning & Issue Creation</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">📋</span>
                        <span className="font-semibold">Linear</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Create issue with requirements</li>
                        <li>• Auto-assign to project/initiative</li>
                        <li>• Track status through workflow states</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">🤖</span>
                        <span className="font-semibold">AI Agent</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Analyze requirements via Linear MCP</li>
                        <li>• Break down into subtasks</li>
                        <li>• Estimate complexity</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-6 top-16 h-full w-0.5 bg-gradient-to-b from-primary to-transparent" />
          </div>

          {/* Step 2: Development */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold">Development & Code Generation</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">🐙</span>
                        <span className="font-semibold">GitHub</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Create feature branch</li>
                        <li>• Auto-link to Linear issue</li>
                        <li>• Track commits</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">🔌</span>
                        <span className="font-semibold">MCP Servers</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Sequential reasoning</li>
                        <li>• GitHub API access</li>
                        <li>• Database operations</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">⚙️</span>
                        <span className="font-semibold">AI Agents</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Generate code</li>
                        <li>• Write tests (98% coverage)</li>
                        <li>• Create documentation</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-6 top-16 h-full w-0.5 bg-gradient-to-b from-primary to-transparent" />
          </div>

          {/* Step 3: Quality Assurance */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold">Review & Quality Checks</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">🪝</span>
                        <span className="font-semibold">Git Hooks</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Pre-commit: Lint + Type check</li>
                        <li>• Pre-push: Tests + Security scan</li>
                        <li>• Post-merge: Update dependencies</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">👁️</span>
                        <span className="font-semibold">AI Review</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Code quality analysis</li>
                        <li>• Security vulnerability scan</li>
                        <li>• Performance optimization</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-6 top-16 h-full w-0.5 bg-gradient-to-b from-primary to-transparent" />
          </div>

          {/* Step 4: Deployment */}
          <div className="relative">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-semibold">Deployment & Monitoring</h4>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">🐙</span>
                        <span className="font-semibold">GitHub PR</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Create pull request</li>
                        <li>• Auto-link Linear issue</li>
                        <li>• Run CI/CD pipeline</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-orange-500 to-red-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">🚀</span>
                        <span className="font-semibold">Hetzner</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Auto-deploy to staging</li>
                        <li>• Run smoke tests</li>
                        <li>• Promote to production</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                  <div className="group/card relative overflow-hidden rounded-lg border bg-muted/30 p-4 transition-all hover:-translate-y-0.5 hover:border-transparent hover:shadow-lg">
                    {/* Gradient top border (shows on hover) */}
                    <div className="absolute left-0 top-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-pink-500 transition-transform group-hover/card:scale-x-100" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover/card:opacity-10" />
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-2xl transition-transform duration-300 group-hover/card:scale-110">📋</span>
                        <span className="font-semibold">Linear</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Auto-update issue status</li>
                        <li>• Mark as completed</li>
                        <li>• Track deployment metrics</li>
                      </ul>
                    </div>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/card:translate-x-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
