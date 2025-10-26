/**
 * Workflow Evolution Component - Main Entry Point
 *
 * A comprehensive showcase of the development workflow transformation
 * from manual processes (20% efficiency) to AI-powered automation (95% efficiency)
 * over 12 months with 3 major versions.
 */

import React, { useState, useEffect } from 'react';
import { TimelineNavigator } from './TimelineNavigator';
import { ComparisonTable } from './ComparisonTable';
import { DeepDiveCards } from './DeepDiveCards';
import { AIAgentsModal } from './modals/AIAgentsModal';
import { WorkflowPhasesModal } from './modals/WorkflowPhasesModal';
import { MCPServersModal } from './modals/MCPServersModal';
import { GitHooksModal } from './modals/GitHooksModal';
import { workflowVersions, aiAgents, mcpServers, gitHooks } from './data';
import type { ModalType } from './types';

export const WorkflowEvolution: React.FC = () => {
  // State management
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [showComparison, setShowComparison] = useState(false);

  // Get current version (v2 - AI-Powered) for Deep Dive counts
  const currentVersion = workflowVersions[2]; // v2

  // Handle modal open/close
  const handleModalOpen = (modalType: ModalType): void => {
    setActiveModal(modalType);
  };

  const handleModalClose = (): void => {
    setActiveModal(null);
  };

  // Handle comparison table
  const handleShowComparison = (): void => {
    setShowComparison(true);
  };

  const handleCloseComparison = (): void => {
    setShowComparison(false);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      // ESC to close modal or comparison
      if (event.key === 'Escape') {
        if (showComparison) {
          handleCloseComparison();
        } else if (activeModal) {
          handleModalClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeModal, showComparison]);

  // Prevent body scroll when modal or comparison is open
  useEffect(() => {
    if (activeModal || showComparison) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal, showComparison]);

  return (
    <section
      id="workflow-evolution"
      className="scroll-mt-20 py-16 md:py-24"
      aria-labelledby="workflow-evolution-heading"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Timeline Navigator - Non-interactive, all versions visible */}
        <TimelineNavigator
          versions={workflowVersions}
          onShowComparison={handleShowComparison}
        />

        {/* Deep Dive Cards */}
        <DeepDiveCards
          onCardClick={handleModalOpen}
          agentCount={currentVersion.features.agents}
          phaseCount={currentVersion.features.phases}
          mcpCount={currentVersion.features.mcpServers}
          hookCount={currentVersion.features.hooks}
        />
      </div>

      {/* Comparison Table Modal */}
      {showComparison && (
        <ComparisonTable
          versions={workflowVersions}
          onClose={handleCloseComparison}
        />
      )}

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
