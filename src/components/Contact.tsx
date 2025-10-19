/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { Mail, Linkedin, Github } from 'lucide-react'

export function Contact() {
  const socialLinks = [
    {
      href: 'mailto:hello@rnltlabs.de',
      icon: Mail,
      label: 'Email',
    },
    {
      href: 'https://www.linkedin.com/in/roman-reinelt/',
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/RomanRnlt',
      icon: Github,
      label: 'GitHub',
    },
  ]

  return (
    <section id="contact" className="bg-secondary py-16 text-center">
      <div className="container mx-auto max-w-[1200px] px-8">
        <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">Contact</h2>
        <p className="mb-8 text-xl font-medium text-foreground">
          Kinda interested in this stuff? Hit me up 🚀
        </p>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="z-[105] flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white transition-all hover:-translate-y-1 hover:scale-110 hover:bg-primary"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
