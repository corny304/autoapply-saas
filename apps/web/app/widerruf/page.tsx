import Link from 'next/link';

export default function WiderrufPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Widerrufsbelehrung</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Widerrufsrecht</h2>
            <p>
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            </p>
            <p className="mt-2">
              Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
            </p>
            <p className="mt-2">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
            </p>
            <div className="mt-2 ml-4">
              <p>Infinity Creators</p>
              <p>Cornelius Gross</p>
              <p>Hauptstrasse 21</p>
              <p>CH-9053 Teufen AR</p>
              <p>Schweiz</p>
              <p>E-Mail: info.infinitycreators@gmail.com</p>
            </div>
            <p className="mt-4">
              mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über 
              Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
            </p>
            <p className="mt-2">
              Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
            </p>
            <p className="mt-2">
              Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des 
              Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Folgen des Widerrufs</h2>
            <p>
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten 
              haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus 
              ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste 
              Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag 
              zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
            </p>
            <p className="mt-2">
              Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen 
              Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; 
              in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
            </p>
            <p className="mt-2">
              Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen soll, so haben 
              Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie 
              uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits 
              erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen 
              Dienstleistungen entspricht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h2>
            <p>
              Das Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, wenn der 
              Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung 
              erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und 
              gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger 
              Vertragserfüllung durch den Unternehmer verliert.
            </p>
          </section>

          <section className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Muster-Widerrufsformular</h2>
            <p className="mb-4">
              (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden 
              Sie es zurück.)
            </p>
            <div className="bg-white p-6 rounded border border-gray-200">
              <p>An:</p>
              <p className="mt-2">
                Infinity Creators<br />
                Cornelius Gross<br />
                Hauptstrasse 21<br />
                CH-9053 Teufen AR<br />
                Schweiz<br />
                E-Mail: info.infinitycreators@gmail.com
              </p>
              <p className="mt-4">
                Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die 
                Erbringung der folgenden Dienstleistung:
              </p>
              <p className="mt-2">_____________________________________________</p>
              <p className="mt-4">Bestellt am (*)/erhalten am (*):</p>
              <p className="mt-2">_____________________________________________</p>
              <p className="mt-4">Name des/der Verbraucher(s):</p>
              <p className="mt-2">_____________________________________________</p>
              <p className="mt-4">Anschrift des/der Verbraucher(s):</p>
              <p className="mt-2">_____________________________________________</p>
              <p className="mt-4">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
              <p className="mt-2">_____________________________________________</p>
              <p className="mt-4">Datum:</p>
              <p className="mt-2">_____________________________________________</p>
              <p className="mt-4 text-sm text-gray-600">(*) Unzutreffendes streichen.</p>
            </div>
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
