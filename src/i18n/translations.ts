/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: roman@rnltlabs.de
 */

export type Lang = 'en' | 'de'

const en = {
  nav: {
    services: 'Work with me',
    proof: 'Proof',
    about: 'About',
    contact: 'Contact',
  },
  hero: {
    title: ['New tech hits different', 'when you ship it.'],
    subtitle: "Hi, I'm Roman. I build agentic AI systems.",
    ctaPrimary: 'Work with me',
    ctaSecondary: 'See the work',
    scrollHint: 'Scroll to content',
  },
  services: {
    eyebrow: 'Work with me',
    title: 'AI that actually works in your business',
    intro:
      'Whether you already use AI or are just getting started, I identify where it adds value in your business and build it into your daily workflows.',
    cards: [
      {
        icon: '🧩',
        title: 'Built around your process',
        text: 'I map how you work today, step by step, and build exactly that. There is nothing new to learn and nothing you have to work around.',
      },
      {
        icon: '🛠️',
        title: 'Made to run every day',
        text: 'Proper error handling, your own data, your branding. The kind of thing that holds up when you lean on it daily.',
      },
      {
        icon: '🤝',
        title: 'I build it, and I stay',
        text: 'After the setup I keep it running while the AI world keeps moving. You stay with your clients, I look after the system.',
      },
    ],
    howTitle: 'How it works',
    steps: [
      {
        title: 'Find the leverage',
        text: 'We look at how you work and where AI actually helps: what comes in, the decisions you make, what comes out.',
      },
      {
        title: 'Build',
        text: 'Each step becomes part of the system. The fixed logic sits in code, the judgment sits with the AI model.',
      },
      {
        title: 'Harden',
        text: 'Validation, error handling and your real data, so it holds up in practice and not only in a demo.',
      },
      {
        title: 'Deliver',
        text: 'Finished, branded output: documents, reports, decks, generated automatically and the same every time.',
      },
    ],
    forWhoLabel: 'Best fit',
    forWho:
      'small teams and agencies that run a demanding process over and over, for clients who expect a sharp result every time.',
    cta: 'Tell me about your process',
  },
  proof: {
    eyebrow: 'Proof',
    title: 'My projects',
    trust:
      "I'm doing my Master's in Business Informatics and work at SAP in Agentic AI Research, building multi-agent systems for enterprise. RNLT Labs is my own lab, where I build out in the open.",
    intro: 'Projects',
    projects: [
      {
        title: 'Agentic SEO Harness',
        tag: 'AI workflow',
        summary:
          'A full SEO audit process built as an AI system, from the briefing all the way to finished, branded Word, PowerPoint and Excel reports. It runs as a Claude Code harness with its own data connections and a set of specialised agents.',
        link: undefined as string | undefined,
        linkLabel: undefined as string | undefined,
      },
      {
        title: 'Athletly',
        tag: 'Open source',
        summary:
          'An autonomous AI coaching engine with its own agentic loop: 20+ tools, a memory with confidence scoring, and an architecture where the code computes and the model decides. It took my half-marathon from 1:39 to 1:28.',
        link: 'https://github.com/RnltLabs/athletly-backend',
        linkLabel: 'GitHub',
      },
      {
        title: 'Runicorn',
        tag: 'Live',
        summary:
          'A GPS-art tool for runners and cyclists: draw a route, export it as GPX, share your run. Live.',
        link: 'https://runicorn.io/',
        linkLabel: 'Visit',
      },
      {
        title: 'Massava',
        tag: 'MVP',
        summary:
          'A booking platform for service providers: scheduling, notifications and less admin. React, NestJS, PostgreSQL.',
        link: 'https://staging.massava.app/',
        linkLabel: 'Visit',
      },
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      'What drives me is working on the gaps most people ignore: repetitive work, broken workflows, inefficient processes and opportunities hiding in plain sight.',
      'I enjoy the entire journey. Understanding the problem. Designing the system. Building it. Testing it. Shipping it. Taking full ownership from concept to launch and maintaining it over time.',
      'Diving into emerging technologies early helps me understand how they can accelerate delivery and keep both my clients and me ahead of the curve.',
      'Some of that work becomes products of my own. Some of it helps businesses replace hours of manual work with AI systems they can actually rely on.',
      'Either way, the goal stays the same: find leverage, build the thing, and make it useful.',
    ],
    meta: 'Business Informatics (M.Sc.) @ HKA · Agentic AI Research @ SAP · Karlsruhe',
  },
  contact: {
    title: "Let's talk",
    subtitle: 'Got a process that eats your time? Tell me about it.',
    name: 'Name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'What process are you thinking about?',
    submit: 'Send message',
    sending: 'Sending...',
    success: "Thanks, your message is on its way. I'll get back to you soon.",
    error: 'Something went wrong. Please try again or email roman@rnltlabs.de directly.',
    note: 'Your details come straight to me, nowhere else.',
    direct: 'Prefer direct?',
    errorName: 'Please enter your name.',
    errorEmail: 'Please enter a valid email.',
    errorMessage: 'Please add a short message.',
    mailSubject: 'Inquiry via rnltlabs.de',
  },
  footer: {
    tagline: "I test in production so you don't have to.",
    imprint: 'Imprint',
  },
}

const de: typeof en = {
  nav: {
    services: 'Zusammenarbeit',
    proof: 'Proof',
    about: 'Über mich',
    contact: 'Kontakt',
  },
  hero: {
    title: ['New tech hits different', 'when you ship it.'],
    subtitle: 'Hi, ich bin Roman. Ich baue agentic AI Systeme.',
    ctaPrimary: 'Zusammenarbeiten',
    ctaSecondary: 'Meine Arbeit ansehen',
    scrollHint: 'Nach unten scrollen',
  },
  services: {
    eyebrow: 'Zusammenarbeit',
    title: 'KI, die in deinem Business wirklich etwas bringt',
    intro:
      'Egal ob du schon KI nutzt oder gerade erst anfängst: Ich baue KI da ein, wo sie deinem Business wirklich hilft.',
    cards: [
      {
        icon: '🧩',
        title: 'Rund um deinen Ablauf gebaut',
        text: 'Ich schaue mir an, wie du heute arbeitest, Schritt für Schritt, und baue genau das. Es gibt nichts Neues zu lernen und nichts, um das du dich herumbiegen musst.',
      },
      {
        icon: '🛠️',
        title: 'Für den täglichen Einsatz',
        text: 'Ordentliche Fehlerbehandlung, deine eigenen Daten, dein Branding. Etwas, das hält, wenn du dich täglich darauf verlässt.',
      },
      {
        icon: '🤝',
        title: 'Ich bau es und bleibe dran',
        text: 'Nach dem Setup halte ich es am Laufen, während sich die KI-Welt weiterdreht. Du kümmerst dich um deine Kunden, ich um das System.',
      },
    ],
    howTitle: 'So läuft es',
    steps: [
      {
        title: 'Hebel finden',
        text: 'Wir schauen, wie du arbeitest und wo KI wirklich hilft: was reinkommt, welche Entscheidungen du triffst, was rauskommt.',
      },
      {
        title: 'Bauen',
        text: 'Jeder Schritt wird Teil des Systems. Die feste Logik sitzt im Code, das Urteilsvermögen beim KI-Modell.',
      },
      {
        title: 'Härten',
        text: 'Validierung, Fehlerbehandlung und deine echten Daten, damit es in der Praxis hält und nicht nur im Demo.',
      },
      {
        title: 'Ausliefern',
        text: 'Fertige, gebrandete Ergebnisse: Dokumente, Reports, Präsentationen, automatisch erzeugt und jedes Mal gleich.',
      },
    ],
    forWhoLabel: 'Passt am besten zu',
    forWho:
      'kleinen Teams und Agenturen, die einen anspruchsvollen Prozess immer wieder fahren, für Kunden, die jedes Mal ein Top-Ergebnis erwarten.',
    cta: 'Erzähl mir von deinem Prozess',
  },
  proof: {
    eyebrow: 'Proof',
    title: 'Meine Projekte',
    trust:
      'Ich mache meinen Master in Wirtschaftsinformatik und arbeite bei SAP im Bereich Agentic-AI Research, wo ich Multi-Agent-Systeme fürs Enterprise baue. RNLT Labs ist mein eigenes Lab, in dem ich offen baue.',
    intro: 'Projekte',
    projects: [
      {
        title: 'Agentic SEO Harness',
        tag: 'KI-Workflow',
        summary:
          'Ein kompletter SEO-Audit-Prozess, gebaut als KI-System, vom Briefing bis zu fertigen, gebrandeten Word-, PowerPoint- und Excel-Reports. Er läuft als Claude-Code-Harness mit eigenen Datenanbindungen und einer Reihe spezialisierter Agenten.',
        link: undefined,
        linkLabel: undefined,
      },
      {
        title: 'Athletly',
        tag: 'Open Source',
        summary:
          'Eine autonome KI-Coaching-Engine mit eigenem agentischen Loop: über 20 Tools, ein Gedächtnis mit Confidence-Bewertung, und eine Architektur, in der der Code rechnet und das Modell entscheidet. Sie hat meine Halbmarathon-Zeit von 1:39 auf 1:28 gebracht.',
        link: 'https://github.com/RnltLabs/athletly-backend',
        linkLabel: 'GitHub',
      },
      {
        title: 'Runicorn',
        tag: 'Live',
        summary:
          'Ein GPS-Art-Tool für Läufer und Radfahrer: Route zeichnen, als GPX exportieren, Lauf teilen. Live.',
        link: 'https://runicorn.io/',
        linkLabel: 'Ansehen',
      },
      {
        title: 'Massava',
        tag: 'MVP',
        summary:
          'Eine Buchungsplattform für Dienstleister: Terminplanung, Benachrichtigungen und weniger Verwaltung. React, NestJS, PostgreSQL.',
        link: 'https://staging.massava.app/',
        linkLabel: 'Ansehen',
      },
    ],
  },
  about: {
    title: 'Über mich',
    paragraphs: [
      'Was mich antreibt, sind die Stellen, die die meisten übersehen: wiederkehrende Arbeit, kaputte Workflows, ineffiziente Prozesse und Chancen, die direkt vor einem liegen.',
      'Mich reizt es, neue Technologien und Trends auszuprobieren, um schnell zu erkennen, welchen Vorteil das für Kunden und für eigene Produkte haben kann.',
      'Spannend ist für mich der gesamte Prozess. Ein Problem verstehen. Das System entwerfen. Bauen. Testen. Releasen. Weiterentwickeln.',
      'Dabei werden Teile meiner Arbeit zu eigenständigen Produkten. Andere Teile hingegen helfen Unternehmen, den Alltag effizienter zu gestalten und komplexe Abläufe zu automatisieren.',
      'Am Ende bleibt es immer gleich: Hebel finden, das System bauen und etwas schaffen, das wirklich Arbeit abnimmt.',
    ],
    meta: 'Business Informatics (M.Sc.) @ HKA · Agentic AI Research @ SAP · Karlsruhe',
  },
  contact: {
    title: "Let's talk",
    subtitle: 'Du hast einen Prozess, der dir Zeit frisst? Erzähl mir davon.',
    name: 'Name',
    email: 'E-Mail',
    company: 'Unternehmen (optional)',
    message: 'An welchen Prozess denkst du?',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet...',
    success: 'Danke, deine Nachricht ist raus. Ich melde mich bald.',
    error: 'Da ist etwas schiefgelaufen. Versuch es nochmal oder schreib direkt an roman@rnltlabs.de.',
    note: 'Deine Angaben gehen direkt an mich, sonst nirgendwohin.',
    direct: 'Lieber direkt?',
    errorName: 'Bitte gib deinen Namen ein.',
    errorEmail: 'Bitte gib eine gültige E-Mail ein.',
    errorMessage: 'Bitte ergänze eine kurze Nachricht.',
    mailSubject: 'Anfrage über rnltlabs.de',
  },
  footer: {
    tagline: "I test in production so you don't have to.",
    imprint: 'Impressum',
  },
}

export const translations = { en, de }
export type Translation = typeof en
