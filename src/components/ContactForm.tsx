/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { useState } from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const CONTACT_EMAIL = 'hello@rnltlabs.de'
// Web3Forms access key, injected at build time via VITE_WEB3FORMS_ACCESS_KEY.
// Local: .env. Production: GitHub Actions build-arg from a repo secret.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

interface Errors {
  name?: string
  email?: string
  message?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const { t } = useLanguage()
  const c = t.contact

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [botcheck, setBotcheck] = useState('') // honeypot, must stay empty
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): Errors => {
    const next: Errors = {}
    if (!name.trim()) next.name = c.errorName
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = c.errorEmail
    if (!message.trim()) next.message = c.errorMessage
    return next
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (botcheck) return // bot filled the honeypot

    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error('VITE_WEB3FORMS_ACCESS_KEY is not set.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: c.mailSubject,
          from_name: 'rnltlabs.de Kontaktformular',
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || '-',
          message: message.trim(),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setName('')
        setEmail('')
        setCompany('')
        setMessage('')
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

  const socialLinks = [
    { href: `mailto:${CONTACT_EMAIL}`, icon: Mail, label: 'Email' },
    { href: 'https://www.linkedin.com/in/roman-reinelt/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/RomanRnlt', icon: Github, label: 'GitHub' },
  ]

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="container mx-auto max-w-[1200px] px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          {/* Left: intro + socials */}
          <div>
            <h2 className="mb-4 text-[2.5rem] font-semibold text-foreground">{c.title}</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{c.subtitle}</p>

            <div className="mb-8 flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white transition-all hover:-translate-y-1 hover:scale-110 hover:bg-primary"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              {c.direct}{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-primary hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {/* Right: form */}
          {status === 'success' ? (
            <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border bg-card p-8 text-center shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-2xl">
                ✓
              </div>
              <p className="text-lg font-medium text-foreground">{c.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="space-y-4">
                {/* Honeypot (hidden from users) */}
                <input
                  type="text"
                  name="botcheck"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={c.name}
                    aria-label={c.name}
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={c.email}
                    aria-label={c.email}
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>

                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={c.company}
                  aria-label={c.company}
                  className={inputClass}
                />

                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={c.message}
                    aria-label={c.message}
                    rows={5}
                    className={`${inputClass} resize-y`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? c.sending : c.submit}
                </button>

                {status === 'error' && (
                  <p className="text-center text-sm text-destructive">{c.error}</p>
                )}
                <p className="text-center text-xs text-muted-foreground">{c.note}</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
