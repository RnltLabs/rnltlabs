# Wording-Umstellung: SEO-Snippets (Title & Meta-Description)

Stand 2026-06-06. Branch `seo/prerender`.

Umstellung der Suchergebnis-Snippets (Title + Meta-Description) auf eine
keyword- und nutzenorientierte, entitaets-staerkende Variante. Gesetzt per
Route und Sprache ueber die `Seo`-Komponente; die Texte liegen in
`src/i18n/translations.ts` (Schluessel `seo`).

## Warum

- Title fuehrt keyword-stark ("Agentic AI Systems for Business Workflows"),
  Markenname ans Ende. Kein "Your" (vage, kostet Platz).
- Description liefert den Nutzen statt die Title-Aufzeichnung zu wiederholen
  (automate workflows, integrate with your tools, deliver real business
  results) und endet mit der Personen-Attribution "By Roman Reinelt".
- "By Roman Reinelt" ist bewusst drin: Name + "agentic AI" zusammen ist ein
  Entitaets-Signal, das hilft, gegen den gleichnamigen Fussballer eine
  eigene Brand-/Personen-Entitaet aufzubauen (siehe auch Person-Schema in
  `index.html` mit alumniOf HKA + affiliation SAP + sameAs).
- Laengen im Budget: Title ~53 Zeichen, Description ~150 Zeichen.
- Kleinschreibung "your" ist korrekt (Satzmitte, kein Title-Case).

## Startseite (`/`)

### Englisch (Standard, wird prerendert)

- **Vorher (statisch, alle Routen identisch):**
  - Title: `RNLT Labs - Agentic AI systems by Roman Reinelt`
  - Description: `Roman Reinelt builds agentic AI systems: his own products, and custom AI built right into the core workflows of businesses. RNLT Labs, Karlsruhe, Germany.`
  - (Im Google-Index stand zeitweise sogar noch aelter: `RNLT Labs - Product Lab by Roman Reinelt`.)
- **Nachher:**
  - Title: `Agentic AI Systems for Business Workflows | RNLT Labs`
  - Description: `Custom-built agentic AI systems and AI agents that automate workflows, integrate with your tools, and deliver real business results. By Roman Reinelt.`

### Deutsch (greift erst mit eigenen `/de`-URLs + hreflang)

- Title: `Agentic-AI-Systeme für Business-Workflows | RNLT Labs`
- Description: `Maßgeschneiderte agentic AI-Systeme und KI-Agenten, die Workflows automatisieren, sich in deine Tools integrieren und echte Ergebnisse liefern. Von Roman Reinelt.`

## Impressum (`/imprint`)

- EN: `Imprint | RNLT Labs` / `Legal notice (Impressum) for RNLT Labs, Roman Reinelt, Karlsruhe, Germany.`
- DE: `Impressum | RNLT Labs` / `Impressum und rechtliche Angaben für RNLT Labs, Roman Reinelt, Karlsruhe.`

## Cookie-Einstellungen (`/cookie-settings`)

- `noindex, follow` (Utility-Seite, kein Snippet erwuenscht).

## Wo gepflegt

- Texte: `src/i18n/translations.ts` -> `seo.{home,imprint,cookie}` (en + de)
- Ausspielung: `src/seo/Seo.tsx` (setzt title, description, robots, canonical,
  OG/Twitter, og:locale + alternate pro Route/Sprache)
- Statischer Default + Person-Schema: `index.html`

## Wichtige Hinweise

1. Snippet ist ein Vorschlag an Google; Google kann Title/Description je nach
   Suchanfrage umschreiben.
2. Sichtbar wird die Umstellung erst nach **Deploy + Re-Crawl**. Beschleunigen
   ueber die Google Search Console ("Indexierung beantragen").
3. Das **deutsche** Snippet erscheint erst, wenn eigene Sprach-URLs (`/de`,
   `/en`) + hreflang live sind (separater Follow-up). Aktuell wird die
   englische Variante prerendert und damit indexiert.
