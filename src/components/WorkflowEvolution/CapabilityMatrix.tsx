/**
 * Capability Matrix Component - Feature comparison table
 */

import React from 'react';
import type { WorkflowVersion, VersionId } from './types';

interface CapabilityMatrixProps {
  versions: WorkflowVersion[];
  selectedVersion: VersionId;
}

interface MatrixRow {
  label: string;
  getValue: (version: WorkflowVersion) => string | number;
  format?: (value: string | number) => string;
  isImprovement?: (value: string | number, baseline: string | number) => boolean;
}

export const CapabilityMatrix: React.FC<CapabilityMatrixProps> = ({
  versions,
  selectedVersion,
}) => {
  const matrixRows: MatrixRow[] = [
    {
      label: 'AI Agents',
      getValue: (v) => v.features.agents,
      isImprovement: (val, baseline) => Number(val) > Number(baseline),
    },
    {
      label: 'Workflow Phases',
      getValue: (v) => v.features.phases,
      isImprovement: (val, baseline) => Number(val) > Number(baseline),
    },
    {
      label: 'MCP Servers',
      getValue: (v) => v.features.mcpServers,
      isImprovement: (val, baseline) => Number(val) > Number(baseline),
    },
    {
      label: 'Git Hooks',
      getValue: (v) => v.features.hooks,
      isImprovement: (val, baseline) => Number(val) > Number(baseline),
    },
    {
      label: 'Test Coverage',
      getValue: (v) => v.features.testCoverage,
      format: (val) => `${val}%`,
      isImprovement: (val, baseline) => Number(val) > Number(baseline),
    },
    {
      label: 'Security Bugs',
      getValue: (v) => v.features.securityBugs,
      isImprovement: (val, baseline) => {
        const extractNumber = (str: string | number) =>
          parseInt(String(str).split('/')[0]);
        return extractNumber(val) < extractNumber(baseline);
      },
    },
    {
      label: 'Code Quality',
      getValue: (v) => v.features.codeQuality,
    },
    {
      label: 'Time per Feature',
      getValue: (v) => v.timePerFeature,
    },
  ];

  const baselineVersion = versions[0];

  const getCellColor = (
    value: string | number,
    versionId: VersionId,
    row: MatrixRow
  ): string => {
    const isSelected = versionId === selectedVersion;
    const baselineValue = row.getValue(baselineVersion);

    if (versionId === baselineVersion.id) {
      return isSelected ? 'bg-red-50 dark:bg-red-950/20' : 'bg-red-50/50 dark:bg-red-950/10';
    }

    if (row.isImprovement && row.isImprovement(value, baselineValue)) {
      return isSelected
        ? 'bg-green-50 dark:bg-green-950/20'
        : 'bg-green-50/50 dark:bg-green-950/10';
    }

    return isSelected ? 'bg-muted' : '';
  };

  const getIcon = (
    value: string | number,
    versionId: VersionId,
    row: MatrixRow
  ): string | null => {
    if (versionId === baselineVersion.id) return null;

    const baselineValue = row.getValue(baselineVersion);

    if (row.isImprovement) {
      if (row.isImprovement(value, baselineValue)) {
        return '✅';
      }
      return '➖';
    }

    return null;
  };

  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl font-semibold">Feature Evolution Matrix</h3>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-lg border shadow-md md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="p-4 text-left text-sm font-semibold">Feature</th>
                {versions.map((version) => (
                  <th
                    key={version.id}
                    className={`
                      p-4 text-center text-sm font-semibold transition-all
                      ${
                        version.id === selectedVersion
                          ? 'bg-primary text-primary-foreground'
                          : ''
                      }
                    `}
                  >
                    <div>{version.id.toUpperCase()}</div>
                    <div className="text-xs font-normal opacity-80">
                      {version.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {matrixRows.map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className={`
                    border-b last:border-b-0
                    ${rowIndex % 2 === 0 ? 'bg-card' : 'bg-muted/20'}
                  `}
                >
                  <td className="p-4 text-sm font-medium">{row.label}</td>
                  {versions.map((version) => {
                    const value = row.getValue(version);
                    const displayValue = row.format ? row.format(value) : value;
                    const icon = getIcon(value, version.id, row);

                    return (
                      <td
                        key={version.id}
                        className={`
                          p-4 text-center text-sm transition-all
                          ${getCellColor(value, version.id, row)}
                          ${
                            version.id === selectedVersion
                              ? 'font-semibold ring-2 ring-inset ring-primary/20'
                              : ''
                          }
                        `}
                      >
                        <div className="flex items-center justify-center gap-2">
                          {icon && <span className="text-base">{icon}</span>}
                          <span>{displayValue}</span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {versions.map((version) => (
          <div
            key={version.id}
            className={`
              overflow-hidden rounded-lg border shadow-md transition-all
              ${
                version.id === selectedVersion
                  ? 'ring-2 ring-primary'
                  : 'opacity-60'
              }
            `}
          >
            {/* Card Header */}
            <div
              className={`
                p-4
                ${
                  version.id === selectedVersion
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }
              `}
            >
              <h4 className="font-semibold">
                {version.id.toUpperCase()} - {version.name}
              </h4>
              <p className="text-sm opacity-80">
                {version.efficiency}% efficiency
              </p>
            </div>

            {/* Card Content */}
            <div className="divide-y bg-card">
              {matrixRows.map((row) => {
                const value = row.getValue(version);
                const displayValue = row.format ? row.format(value) : value;
                const icon = getIcon(value, version.id, row);

                return (
                  <div
                    key={row.label}
                    className="flex items-center justify-between p-3"
                  >
                    <span className="text-sm text-muted-foreground">
                      {row.label}
                    </span>
                    <div className="flex items-center gap-2">
                      {icon && <span className="text-base">{icon}</span>}
                      <span className="font-medium">{displayValue}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
