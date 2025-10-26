/**
 * Deep Dive Cards Component - Clickable cards for detailed modals
 */

import React from 'react';
import type { ModalType } from './types';

interface DeepDiveCardsProps {
  onCardClick: (modalType: ModalType) => void;
  agentCount: number;
  phaseCount: number;
  mcpCount: number;
  hookCount: number;
}

interface CardData {
  id: ModalType;
  icon: string;
  title: string;
  count: number;
  description: string;
  gradient: string;
}

export const DeepDiveCards: React.FC<DeepDiveCardsProps> = ({
  onCardClick,
  agentCount,
  phaseCount,
  mcpCount,
  hookCount,
}) => {
  const cards: CardData[] = [
    {
      id: 'agents',
      icon: '🤖',
      title: 'AI Agents',
      count: agentCount,
      description: 'Specialized agents for each workflow phase',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'phases',
      icon: '📊',
      title: 'Workflow Phases',
      count: phaseCount,
      description: 'Complete development lifecycle automation',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'mcp',
      icon: '🔌',
      title: 'MCP Servers',
      count: mcpCount,
      description: 'Model Context Protocol integrations',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'hooks',
      icon: '🪝',
      title: 'Git Hooks',
      count: hookCount,
      description: 'Automated quality gates and checks',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="mb-12">
      <h3 className="mb-6 text-2xl font-semibold">Technical Deep Dive</h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => onCardClick(card.id)}
            className="group relative overflow-hidden rounded-lg border bg-card p-6 text-left shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {/* Background Gradient (on hover) */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity
                duration-300 group-hover:opacity-10 ${card.gradient}
              `}
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4 flex items-center justify-between">
                <div className="text-4xl">{card.icon}</div>
                <div className="rounded-full bg-muted px-3 py-1 text-sm font-semibold text-muted-foreground">
                  {card.count}
                </div>
              </div>

              {/* Title */}
              <h4 className="mb-2 text-lg font-semibold">{card.title}</h4>

              {/* Description */}
              <p className="mb-4 text-sm text-muted-foreground">
                {card.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-1">
                Explore details
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        ))}
      </div>
    </div>
  );
};
