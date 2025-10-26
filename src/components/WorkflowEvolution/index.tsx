/**
 * Workflow Evolution Component - Main Entry Point
 *
 * A comprehensive showcase of the development workflow transformation
 * from manual processes (20% efficiency) to AI-powered automation (95% efficiency)
 * over 12 months with 3 major versions.
 */

import React, { useState, useEffect } from 'react';
import { TimelineNavigator } from './TimelineNavigator';
import { DeepDiveCards } from './DeepDiveCards';
import { AutomationWorkflow } from './AutomationWorkflow';
import { WhyItMatters } from './WhyItMatters';
import { AIAgentsModal } from './modals/AIAgentsModal';
import { WorkflowPhasesModal } from './modals/WorkflowPhasesModal';
import { MCPServersModal } from './modals/MCPServersModal';
import { GitHooksModal } from './modals/GitHooksModal';
import { workflowVersions, aiAgents, mcpServers, gitHooks } from './data';
import type { ModalType } from './types';

export const WorkflowEvolution: React.FC = () => {
  // State management
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  // Get current version (v2 - AI-Powered) for Deep Dive counts
  const currentVersion = workflowVersions[2]; // v2

  // Handle modal open/close
  const handleModalOpen = (modalType: ModalType): void => {
    setActiveModal(modalType);
  };

  const handleModalClose = (): void => {
    setActiveModal(null);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      // ESC to close modal
      if (event.key === 'Escape' && activeModal) {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  return (
    <section
      id="workflow-evolution"
      className="bg-background py-20"
      aria-labelledby="workflow-evolution-heading"
    >
      <div className="container mx-auto max-w-[1200px] px-8">
        {/* Timeline Navigator - Expandable cards */}
        <TimelineNavigator versions={workflowVersions} />

        {/* Deep Dive Cards */}
        <DeepDiveCards
          onCardClick={handleModalOpen}
          agentCount={currentVersion.features.agents}
          phaseCount={currentVersion.features.phases}
          mcpCount={currentVersion.features.mcpServers}
          hookCount={currentVersion.features.hooks}
        />

        {/* Complete Automation Flow */}
        <AutomationWorkflow />

        {/* Why It Matters Section */}
        <WhyItMatters />
      </div>

      {/* Modals */}
      <AIAgentsModal
        isOpen={activeModal === 'agents'}
        onClose={handleModalClose}
        agents={aiAgents}
      />
      <WorkflowPhasesModal
        isOpen={activeModal === 'phases'}
        onClose={handleModalClose}
        phases={currentVersion.phases}
      />
      <MCPServersModal
        isOpen={activeModal === 'mcp'}
        onClose={handleModalClose}
        servers={mcpServers}
      />
      <GitHooksModal
        isOpen={activeModal === 'hooks'}
        onClose={handleModalClose}
        hooks={gitHooks}
      />
    </section>
  );
};

export default WorkflowEvolution;
