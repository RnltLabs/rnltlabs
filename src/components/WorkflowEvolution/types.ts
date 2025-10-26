/**
 * Type definitions for Workflow Evolution component
 */

export type VersionId = 'v0' | 'v1' | 'v2';

export type ModalType = 'agents' | 'phases' | 'mcp' | 'hooks' | null;

export interface WorkflowFeatures {
  agents: number;
  phases: number;
  mcpServers: number;
  hooks: number;
  testCoverage: number;
  securityBugs: string;
  codeQuality: string;
}

export interface WorkflowPhase {
  name: string;
  aiCoverage: number;
  description: string;
  examples: string[];
}

export interface WorkflowVersion {
  id: VersionId;
  name: string;
  efficiency: number;
  timePerFeature: string;
  features: WorkflowFeatures;
  description: string;
  phases: WorkflowPhase[];
  highlightColor: string;
}

export interface AIAgent {
  id: string;
  name: string;
  role: string;
  icon: string;
  capabilities: string[];
  description: string;
}

export interface MCPServer {
  id: string;
  name: string;
  purpose: string;
  capabilities: string[];
  integrations: string[];
}

export interface GitHook {
  id: string;
  name: string;
  trigger: string;
  actions: string[];
  impact: string;
}

export interface ImpactMetric {
  label: string;
  value: number;
  change: string;
  icon: string;
}
