/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { lazy, Suspense } from 'react'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { LabStrategy } from '../components/LabStrategy'
import { Projects } from '../components/Projects'
import { TechStack } from '../components/TechStack'
import { Founder } from '../components/Founder'
import { Contact } from '../components/Contact'

// Performance: Lazy load WorkflowEvolution (large component with modals)
// This reduces initial bundle size by ~150KB
const WorkflowEvolution = lazy(() => import('../components/WorkflowEvolution/'))

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-[60px]">
        <Hero />
        <LabStrategy />
        <Projects />
        <TechStack />

        {/* Lazy load below-the-fold content for better initial load performance */}
        <Suspense
          fallback={
            <div className="bg-background py-20">
              <div className="container mx-auto max-w-[1200px] px-8">
                <div className="h-[400px] animate-pulse rounded-2xl bg-secondary" />
              </div>
            </div>
          }
        >
          <WorkflowEvolution />
        </Suspense>

        <Founder />
        <Contact />
      </div>

      <footer className="relative z-[105] bg-foreground py-6 text-white">
        <div className="container mx-auto text-center">
          <p className="mb-3 text-lg opacity-90">We test in production so you don't have to.</p>
          <a
            href="/imprint"
            className="inline-block px-3 py-2 text-sm opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 active:opacity-100"
          >
            Imprint
          </a>
        </div>
      </footer>
    </div>
  )
}
