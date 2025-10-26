/**
 * Data for Workflow Evolution component
 */

import type { WorkflowVersion, AIAgent, MCPServer, GitHook, ImpactMetric } from './types';

export const workflowVersions: WorkflowVersion[] = [
  {
    id: 'v0',
    name: 'Manual Workflow',
    efficiency: 20,
    timePerFeature: '12 hours',
    highlightColor: 'from-red-500 to-orange-500',
    description: 'Traditional development with manual code reviews, testing, and deployment.',
    features: {
      agents: 0,
      phases: 3,
      mcpServers: 0,
      hooks: 1,
      testCoverage: 45,
      securityBugs: '12/year',
      codeQuality: 'Manual',
    },
    phases: [
      {
        name: 'Plan',
        aiCoverage: 0,
        description: 'Manual requirement gathering and planning',
        examples: ['Spreadsheet tracking', 'Email threads', 'Manual estimates'],
      },
      {
        name: 'Build',
        aiCoverage: 0,
        description: 'Manual coding with basic IDE support',
        examples: ['Standard IDE', 'Manual code formatting', 'Google for solutions'],
      },
      {
        name: 'Test',
        aiCoverage: 0,
        description: 'Manual testing and bug fixes',
        examples: ['Manual QA', 'Postman API testing', 'Manual regression testing'],
      },
    ],
  },
  {
    id: 'v1',
    name: 'Semi-Automated',
    efficiency: 60,
    timePerFeature: '4 hours',
    highlightColor: 'from-amber-500 to-yellow-500',
    description: 'Introduced automation tools, CI/CD pipelines, and basic code analysis.',
    features: {
      agents: 4,
      phases: 6,
      mcpServers: 0,
      hooks: 2,
      testCoverage: 78,
      securityBugs: '3/year',
      codeQuality: 'Semi-auto',
    },
    phases: [
      {
        name: 'Plan',
        aiCoverage: 30,
        description: 'Project management tools with templates',
        examples: ['Jira automation', 'Template-based planning', 'Basic analytics'],
      },
      {
        name: 'Design',
        aiCoverage: 40,
        description: 'Design systems and component libraries',
        examples: ['Figma templates', 'Design tokens', 'Component docs'],
      },
      {
        name: 'Build',
        aiCoverage: 50,
        description: 'IDE extensions and code snippets',
        examples: ['ESLint', 'Prettier', 'Code snippets'],
      },
      {
        name: 'Test',
        aiCoverage: 70,
        description: 'Automated unit and integration tests',
        examples: ['Jest', 'Cypress', 'CI/CD pipelines'],
      },
      {
        name: 'Review',
        aiCoverage: 40,
        description: 'PR templates and basic linting',
        examples: ['GitHub Actions', 'SonarQube', 'PR templates'],
      },
      {
        name: 'Deploy',
        aiCoverage: 80,
        description: 'Automated deployments',
        examples: ['Docker', 'Kubernetes', 'Auto-deploy'],
      },
    ],
  },
  {
    id: 'v2',
    name: 'AI-Powered Workflow',
    efficiency: 95,
    timePerFeature: '90 minutes',
    highlightColor: 'from-green-500 to-emerald-500',
    description: '12 AI agents automate planning, design, development, testing, and deployment with 95% efficiency.',
    features: {
      agents: 12,
      phases: 8,
      mcpServers: 4,
      hooks: 4,
      testCoverage: 98,
      securityBugs: '0/year',
      codeQuality: 'AI-enforced',
    },
    phases: [
      {
        name: 'Plan',
        aiCoverage: 95,
        description: 'AI analyzes requirements and creates detailed plans',
        examples: ['project-planner agent', 'Auto task breakdown', 'Effort estimation'],
      },
      {
        name: 'Design',
        aiCoverage: 100,
        description: 'AI generates complete design specifications',
        examples: ['ux-designer agent', 'Component specs', 'Accessibility checks'],
      },
      {
        name: 'Build',
        aiCoverage: 85,
        description: 'AI generates code with best practices',
        examples: ['feature-builder agent', 'Auto imports', 'Type safety'],
      },
      {
        name: 'Test',
        aiCoverage: 100,
        description: 'AI generates comprehensive tests',
        examples: ['testing-specialist agent', '98% coverage', 'E2E tests'],
      },
      {
        name: 'Review',
        aiCoverage: 100,
        description: 'AI performs multi-agent code review',
        examples: ['code-reviewer agent', 'Security scan', 'Performance audit'],
      },
      {
        name: 'Document',
        aiCoverage: 100,
        description: 'AI auto-generates documentation',
        examples: ['documentation-writer agent', 'API docs', 'Code comments'],
      },
      {
        name: 'Optimize',
        aiCoverage: 90,
        description: 'AI optimizes performance and security',
        examples: ['performance-optimizer agent', 'Bundle analysis', 'Security hardening'],
      },
      {
        name: 'Deploy',
        aiCoverage: 80,
        description: 'AI manages deployment pipeline',
        examples: ['devops-engineer agent', 'Auto rollback', 'Health checks'],
      },
    ],
  },
];

export const aiAgents: AIAgent[] = [
  {
    id: 'project-planner',
    name: 'Project Planner',
    role: 'Strategic Planning',
    icon: '📋',
    capabilities: [
      'Breaks down features into tasks',
      'Estimates effort and complexity',
      'Identifies dependencies and risks',
    ],
    description: 'Analyzes requirements and creates comprehensive project plans with task breakdowns, timelines, and resource allocation.',
  },
  {
    id: 'ux-designer',
    name: 'UX Designer',
    role: 'User Experience',
    icon: '🎨',
    capabilities: [
      'Creates design specifications',
      'Ensures WCAG 2.1 AA compliance',
      'Designs component hierarchies',
    ],
    description: 'Generates complete design specs with wireframes, component choices, and accessibility requirements using shadcn/ui.',
  },
  {
    id: 'feature-builder',
    name: 'Feature Builder',
    role: 'Development',
    icon: '⚙️',
    capabilities: [
      'Implements features from specs',
      'Follows TypeScript best practices',
      'Integrates with existing codebase',
    ],
    description: 'Builds production-ready features with proper error handling, type safety, and integration with backend services.',
  },
  {
    id: 'testing-specialist',
    name: 'Testing Specialist',
    role: 'Quality Assurance',
    icon: '🧪',
    capabilities: [
      'Generates unit and integration tests',
      'Achieves 98% code coverage',
      'Creates E2E test scenarios',
    ],
    description: 'Writes comprehensive test suites using Tap framework, ensuring edge cases and error paths are covered.',
  },
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    role: 'Quality Control',
    icon: '👁️',
    capabilities: [
      'Reviews code for best practices',
      'Identifies security vulnerabilities',
      'Ensures consistency with standards',
    ],
    description: 'Performs multi-pass code review checking TypeScript patterns, error handling, performance, and security.',
  },
  {
    id: 'documentation-writer',
    name: 'Documentation Writer',
    role: 'Technical Writing',
    icon: '📚',
    capabilities: [
      'Writes API documentation',
      'Creates inline code comments',
      'Generates README files',
    ],
    description: 'Produces clear, comprehensive documentation with examples, usage guides, and architecture explanations.',
  },
  {
    id: 'performance-optimizer',
    name: 'Performance Optimizer',
    role: 'Optimization',
    icon: '⚡',
    capabilities: [
      'Optimizes bundle sizes',
      'Improves rendering performance',
      'Implements caching strategies',
    ],
    description: 'Analyzes and optimizes application performance, reducing bundle sizes and improving Core Web Vitals.',
  },
  {
    id: 'security-auditor',
    name: 'Security Auditor',
    role: 'Security',
    icon: '🔒',
    capabilities: [
      'Scans for vulnerabilities',
      'Enforces security best practices',
      'Validates input sanitization',
    ],
    description: 'Performs comprehensive security audits, identifying and fixing vulnerabilities before deployment.',
  },
  {
    id: 'devops-engineer',
    name: 'DevOps Engineer',
    role: 'Infrastructure',
    icon: '🚀',
    capabilities: [
      'Manages deployment pipelines',
      'Configures monitoring and alerts',
      'Handles rollback strategies',
    ],
    description: 'Automates deployment workflows, manages infrastructure, and ensures zero-downtime deployments.',
  },
  {
    id: 'accessibility-auditor',
    name: 'Accessibility Auditor',
    role: 'Accessibility',
    icon: '♿',
    capabilities: [
      'Ensures WCAG compliance',
      'Tests keyboard navigation',
      'Validates screen reader support',
    ],
    description: 'Audits applications for accessibility compliance, ensuring all users can access features.',
  },
  {
    id: 'api-integrator',
    name: 'API Integrator',
    role: 'Integration',
    icon: '🔌',
    capabilities: [
      'Integrates third-party APIs',
      'Handles error scenarios',
      'Implements retry logic',
    ],
    description: 'Connects applications to external services with proper error handling and rate limiting.',
  },
  {
    id: 'database-architect',
    name: 'Database Architect',
    role: 'Data Management',
    icon: '🗄️',
    capabilities: [
      'Designs database schemas',
      'Optimizes queries',
      'Implements migrations',
    ],
    description: 'Designs efficient database schemas using Prisma ORM with proper indexing and relationships.',
  },
];

export const mcpServers: MCPServer[] = [
  {
    id: 'sequential-thinking-mcp',
    name: 'Sequential Thinking MCP',
    purpose: 'Advanced reasoning and problem-solving',
    capabilities: [
      'Break down complex problems into steps',
      'Chain of thought reasoning',
      'Dynamic problem-solving with revision',
      'Hypothesis generation and verification',
    ],
    integrations: ['AI agents', 'Complex analysis', 'Strategic planning'],
  },
  {
    id: 'github-mcp',
    name: 'GitHub MCP Server',
    purpose: 'Repository management and version control',
    capabilities: [
      'Create and manage branches',
      'Submit pull requests',
      'Review code changes',
      'Manage issues and discussions',
    ],
    integrations: ['Git workflow', 'PR automation', 'Code review process'],
  },
  {
    id: 'linear-mcp',
    name: 'Linear MCP Server',
    purpose: 'Project management and issue tracking',
    capabilities: [
      'Create and update issues',
      'Manage projects and initiatives',
      'Track workflow states',
      'Sync with development workflow',
    ],
    integrations: ['Issue tracking', 'Project planning', 'Team collaboration'],
  },
  {
    id: 'postgres-mcp',
    name: 'PostgreSQL MCP Server',
    purpose: 'Database operations and schema management',
    capabilities: [
      'Execute SQL queries',
      'Manage schemas and migrations',
      'Backup and restore',
      'Performance monitoring',
    ],
    integrations: ['Data layer', 'Migration scripts', 'Database testing'],
  },
];

export const gitHooks: GitHook[] = [
  {
    id: 'pre-commit',
    name: 'Pre-commit Hook',
    trigger: 'Before commit is created',
    actions: [
      'Run ESLint and Prettier',
      'Execute type checking',
      'Validate commit message format',
      'Check for sensitive data',
    ],
    impact: 'Prevents committing broken or improperly formatted code',
  },
  {
    id: 'commit-msg',
    name: 'Commit Message Hook',
    trigger: 'After commit message is entered',
    actions: [
      'Validate conventional commit format',
      'Ensure proper ticket references',
      'Check message length and clarity',
      'Auto-add metadata',
    ],
    impact: 'Maintains consistent, searchable commit history',
  },
  {
    id: 'pre-push',
    name: 'Pre-push Hook',
    trigger: 'Before pushing to remote',
    actions: [
      'Run full test suite',
      'Execute security scans',
      'Validate build succeeds',
      'Check for merge conflicts',
    ],
    impact: 'Ensures only tested, secure code reaches the repository',
  },
  {
    id: 'post-merge',
    name: 'Post-merge Hook',
    trigger: 'After merge is completed',
    actions: [
      'Update dependencies',
      'Run database migrations',
      'Clear caches',
      'Notify team of changes',
    ],
    impact: 'Keeps development environment synchronized',
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    label: 'Development Speed',
    value: 87.5,
    change: '12h → 90min',
    icon: '⚡',
  },
  {
    label: 'Code Quality',
    value: 95,
    change: '20% → 95% efficiency',
    icon: '✨',
  },
  {
    label: 'Test Coverage',
    value: 98,
    change: '45% → 98%',
    icon: '🎯',
  },
  {
    label: 'Security',
    value: 100,
    change: '12/year → 0 bugs',
    icon: '🛡️',
  },
];
