import Link from 'next/link';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge über die Nutzung der 
              AutoApply-Plattform zwischen Infinity Creators (nachfolgend „Anbieter") und dem Nutzer 
              (nachfolgend „Kunde").
            </p>
            <p className="mt-2">
              Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Anbieter stimmt 
              ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Vertragsgegenstand</h2>
            <p>
              Der Anbieter stellt dem Kunden eine Online-Plattform zur Verfügung, über die automatisierte 
              Bewerbungen erstellt und versendet werden können (nachfolgend „Dienst").
            </p>
            <p className="mt-2">
              Der Umfang der Leistungen ergibt sich aus der Leistungsbeschreibung des gewählten Tarifs 
              (Starter, Pro oder Business).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Vertragsschluss und Registrierung</h2>
            <p>
              Der Vertrag kommt durch die Registrierung des Kunden auf der Plattform und die Bestätigung 
              durch den Anbieter zustande.
            </p>
            <p className="mt-2">
              Bei kostenpflichtigen Tarifen kommt der Vertrag durch die Buchung und erfolgreiche Zahlung zustande.
            </p>
            <p className="mt-2">
              Der Kunde versichert, dass alle bei der Registrierung angegebenen Daten wahrheitsgemäß und 
              vollständig sind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
            <p>
              Die Preise für die kostenpflichtigen Tarife ergeben sich aus der aktuellen Preisliste auf der Website.
            </p>
            <p className="mt-2">
              Alle Preise verstehen sich als Bruttopreise inklusive der gesetzlichen Mehrwertsteuer.
            </p>
            <p className="mt-2">
              Die Abrechnung erfolgt monatlich im Voraus. Die Zahlung erfolgt über den Zahlungsdienstleister Stripe.
            </p>
            <p className="mt-2">
              Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang zum Dienst zu sperren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Vertragslaufzeit und Kündigung</h2>
            <p>
              Der Vertrag wird auf unbestimmte Zeit geschlossen und kann von beiden Parteien jederzeit mit 
              einer Frist von 30 Tagen zum Monatsende gekündigt werden.
            </p>
            <p className="mt-2">
              Die Kündigung kann über das Kundenportal oder per E-Mail an info.infinitycreators@gmail.com erfolgen.
            </p>
            <p className="mt-2">
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
            <p className="mt-2">
              Bei Kündigung werden bereits gezahlte Beträge für den laufenden Monat nicht erstattet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Widerrufsrecht</h2>
            <p>
              Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Einzelheiten ergeben sich aus der 
              <Link href="/widerruf" className="text-blue-600 hover:underline">Widerrufsbelehrung</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Pflichten des Kunden</h2>
            <p>Der Kunde verpflichtet sich:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Den Dienst nur für rechtmäßige Zwecke zu nutzen</li>
              <li>Keine falschen oder irreführenden Angaben zu machen</li>
              <li>Seine Zugangsdaten geheim zu halten und nicht an Dritte weiterzugeben</li>
              <li>Den Anbieter unverzüglich zu informieren, wenn er Kenntnis von einem Missbrauch erhält</li>
              <li>Die geltenden Datenschutzbestimmungen einzuhalten</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Verfügbarkeit und Gewährleistung</h2>
            <p>
              Der Anbieter bemüht sich um eine möglichst hohe Verfügbarkeit des Dienstes. Eine Verfügbarkeit 
              von 100% kann jedoch nicht garantiert werden.
            </p>
            <p className="mt-2">
              Der Anbieter ist berechtigt, den Dienst vorübergehend einzustellen, soweit dies aus technischen 
              Gründen (z.B. Wartung, Weiterentwicklung) erforderlich ist.
            </p>
            <p className="mt-2">
              Der Anbieter gewährleistet, dass der Dienst die vertraglich vereinbarte Beschaffenheit aufweist 
              und für die vertraglich vorausgesetzte Verwendung geeignet ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 9 Haftung</h2>
            <p>
              Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie bei Verletzung von 
              Leben, Körper oder Gesundheit.
            </p>
            <p className="mt-2">
              Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten 
              (Kardinalpflichten). In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren 
              Schaden begrenzt.
            </p>
            <p className="mt-2">
              Der Anbieter haftet nicht für den Erfolg der über den Dienst versendeten Bewerbungen. Die 
              Verantwortung für die Richtigkeit und Vollständigkeit der Bewerbungsunterlagen liegt beim Kunden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 10 Datenschutz</h2>
            <p>
              Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten des Kunden nur im Rahmen der 
              geltenden Datenschutzbestimmungen. Einzelheiten ergeben sich aus der 
              <Link href="/datenschutz" className="text-blue-600 hover:underline ml-1">Datenschutzerklärung</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 11 Änderungen der AGB</h2>
            <p>
              Der Anbieter behält sich vor, diese AGB jederzeit zu ändern. Änderungen werden dem Kunden 
              mindestens 30 Tage vor ihrem Inkrafttreten per E-Mail mitgeteilt.
            </p>
            <p className="mt-2">
              Widerspricht der Kunde den geänderten AGB nicht innerhalb von 30 Tagen nach Zugang der 
              Änderungsmitteilung, gelten die geänderten AGB als angenommen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 12 Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="mt-2">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die 
              Wirksamkeit der übrigen Bestimmungen nicht.
            </p>
            <p className="mt-2">
              Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist, soweit gesetzlich zulässig, 
              der Sitz des Anbieters.
            </p>
          </section>

          <section className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Stand: Februar 2026
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
