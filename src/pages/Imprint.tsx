/**
 * Copyright (c) 2025 Roman Reinelt / RNLT Labs
 *
 * This software is proprietary and confidential.
 * Unauthorized use, reproduction, or distribution is prohibited.
 * For licensing information, contact: hello@rnltlabs.de
 */

import { Header } from '../components/Header'

export function Imprint() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />

      {/* Impressum Section */}
      <section id="impressum" className="bg-background py-12 pt-20">
        <div className="container mx-auto max-w-[1200px] px-8">
          <h2 className="mb-6 text-[2rem] font-semibold text-foreground">Impressum</h2>
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <h3 className="mb-4 text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h3>
            <address className="mb-4 not-italic rounded-lg bg-secondary p-4">
              <strong className="font-medium text-foreground">Roman Reinelt</strong>
              <br />
              Lachnerstr. 12
              <br />
              76131 Karlsruhe
              <br />
              Deutschland
            </address>

            <h3 className="mb-4 text-lg font-semibold text-foreground">Kontakt</h3>
            <p className="text-muted-foreground">
              <strong className="font-medium text-foreground">E-Mail:</strong> hello@rnltlabs.de
            </p>
          </div>
        </div>
      </section>

      {/* Haftung für Inhalte */}
      <section id="haftung-inhalte" className="bg-secondary py-12">
        <div className="container mx-auto max-w-[1200px] px-8">
          <h2 className="mb-6 text-[2rem] font-semibold text-foreground">Haftung für Inhalte</h2>
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <p className="mb-4 leading-relaxed text-muted-foreground">
              Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
              Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
              entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </section>

      {/* Haftung für Links */}
      <section id="haftung-links" className="bg-background py-12">
        <div className="container mx-auto max-w-[1200px] px-8">
          <h2 className="mb-6 text-[2rem] font-semibold text-foreground">Haftung für Links</h2>
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <p className="mb-4 leading-relaxed text-muted-foreground">
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich
              keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr
              übernehmen.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
              nicht erkennbar.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>
          </div>
        </div>
      </section>

      {/* Urheberrecht */}
      <section id="urheberrecht" className="bg-secondary py-12">
        <div className="container mx-auto max-w-[1200px] px-8">
          <h2 className="mb-6 text-[2rem] font-semibold text-foreground">Urheberrecht</h2>
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <p className="mb-4 leading-relaxed text-muted-foreground">
              Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
              der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen
              Gebrauch gestattet.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Soweit die Inhalte auf dieser Seite nicht von mir erstellt wurden, werden die
              Urheberrechte Dritter beachtet und entsprechend gekennzeichnet. Solltest du auf eine
              Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.
              Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </section>

      {/* Datenschutzerklärung */}
      <section id="datenschutz" className="bg-background py-12">
        <div className="container mx-auto max-w-[1200px] px-8">
          <h2 className="mb-6 text-[2rem] font-semibold text-foreground">
            Datenschutzerklärung
          </h2>
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
            <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-[100px] translate-x-[30px] translate-y-[-30px] rounded-full bg-gradient-to-br from-transparent to-primary/5" />

            <h3 className="mb-4 text-lg font-semibold text-foreground">1. Allgemeine Hinweise</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Diese Datenschutzerklärung informiert Besucher dieser Website gemäß Art. 13 DSGVO
              darüber, welche personenbezogenen Daten beim Besuch meiner Website verarbeitet
              werden.
            </p>

            <h3 className="mb-4 text-lg font-semibold text-foreground">2. Verantwortlicher</h3>
            <address className="mb-4 not-italic rounded-lg bg-secondary p-4">
              <strong className="font-medium text-foreground">Roman Reinelt</strong>
              <br />
              Lachnerstr. 12
              <br />
              76131 Karlsruhe
              <br />
              E-Mail: hello@rnltlabs.de
            </address>

            <h3 className="mb-4 text-lg font-semibold text-foreground">
              3. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren
              Verwendung
            </h3>

            <p className="mb-2 font-medium text-foreground">a) Besuch der Website</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Beim Aufrufen dieser Website werden durch den Browser automatisch Informationen an
              den Server meiner Website gesendet. Diese Informationen (z. B. IP-Adresse, Datum und
              Uhrzeit des Zugriffs, verwendeter Browser, Betriebssystem) werden temporär in einem
              sogenannten Logfile gespeichert.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mein
              berechtigtes Interesse folgt aus den genannten Zwecken zur Sicherstellung eines
              reibungslosen Verbindungsaufbaus sowie zur Auswertung der Systemsicherheit und
              -stabilität.
            </p>

            <p className="mb-2 font-medium text-foreground">b) Kontaktaufnahme per E-Mail</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Wenn du mich per E-Mail kontaktierst, werden die von dir übermittelten
              personenbezogenen Daten (z. B. Name, E-Mail-Adresse, Nachricht) gespeichert, um deine
              Anfrage zu bearbeiten.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines
              Vertrags oder vorvertraglicher Maßnahmen).
            </p>

            <p className="mb-2 font-medium text-foreground">c) Externe Links (LinkedIn, GitHub)</p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Beim Anklicken externer Links (z. B. LinkedIn, GitHub) werden Daten an den jeweiligen
              Anbieter übertragen. Ich habe keinen Einfluss auf die Verarbeitung durch den
              Drittanbieter. Weitere Informationen findest du in den Datenschutzrichtlinien dieser
              Anbieter.
            </p>

            <h3 className="mb-4 text-lg font-semibold text-foreground">4. Weitergabe von Daten</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Eine Übermittlung deiner persönlichen Daten an Dritte findet nicht statt, außer in
              den genannten Fällen (z. B. externe Links) oder wenn ich gesetzlich dazu verpflichtet
              bin.
            </p>

            <h3 className="mb-4 text-lg font-semibold text-foreground">5. Speicherdauer</h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Ich speichere personenbezogene Daten nur so lange, wie dies zur Erreichung der
              genannten Zwecke erforderlich ist oder wie es gesetzlich vorgeschrieben ist.
            </p>

            <h3 className="mb-4 text-lg font-semibold text-foreground">6. Deine Rechte</h3>
            <p className="mb-2 leading-relaxed text-muted-foreground">
              Du hast folgende Rechte nach der DSGVO:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2 pl-4 text-muted-foreground">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Zur Ausübung dieser Rechte genügt eine E-Mail an: hello@rnltlabs.de
            </p>

            <h3 className="mb-4 text-lg font-semibold text-foreground">
              7. Aktualität und Änderung dieser Datenschutzerklärung
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: August 2025.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Ich behalte mir vor, diese Datenschutzerklärung bei Änderungen an meiner Website oder
              den gesetzlichen Vorgaben anzupassen.
            </p>
          </div>
        </div>
      </section>

      <footer className="relative z-[105] bg-foreground py-4 text-white">
        <div className="container mx-auto text-center">
          <p className="mb-1 text-lg opacity-90">We test in production so you don't have to.</p>
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
