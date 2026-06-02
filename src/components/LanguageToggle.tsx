/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const options: Lang[] = ['de', 'en']

  return (
    <div
      className="inline-flex items-center rounded-full border bg-secondary p-0.5 text-xs font-semibold"
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => setLang(opt)}
          aria-pressed={lang === opt}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            lang === opt
              ? 'bg-foreground text-white'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
