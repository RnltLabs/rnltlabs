/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { LabStrategy } from '../components/LabStrategy'
import { Projects } from '../components/Projects'
import { TechStack } from '../components/TechStack'
import { WorkflowEvolution } from '../components/WorkflowEvolution/'
import { Founder } from '../components/Founder'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <div className="pt-[60px]">
        <Hero />
        <LabStrategy />
        <Projects />
        <TechStack />
        <WorkflowEvolution />
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
