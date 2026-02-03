import Link from 'next/link';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
              Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="mt-2">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p className="font-semibold mt-4">Wie erfassen wir Ihre Daten?</p>
            <p className="mt-2">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
              um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mt-2">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
              Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="font-semibold mt-4">Wofür nutzen wir Ihre Daten?</p>
            <p className="mt-2">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
              Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <p className="font-semibold mt-4">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p className="mt-2">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt 
              haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das 
              Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
              zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
            <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Vercel</h3>
            <p>
              Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA (nachfolgend „Vercel").
            </p>
            <p className="mt-2">
              Vercel ist ein Dienst zum Hosten von Websites. Wenn Sie unsere Website besuchen, erfasst Vercel 
              verschiedene Logfiles inklusive Ihrer IP-Adressen.
            </p>
            <p className="mt-2">
              Details entnehmen Sie der Datenschutzerklärung von Vercel: 
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                https://vercel.com/legal/privacy-policy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Railway</h3>
            <p>
              Anbieter ist Railway Corp., USA (nachfolgend „Railway").
            </p>
            <p className="mt-2">
              Railway ist ein Dienst zum Hosten von Backend-Anwendungen und Datenbanken. Wenn Sie unsere Website nutzen, 
              werden Ihre Daten auf den Servern von Railway verarbeitet.
            </p>
            <p className="mt-2">
              Details entnehmen Sie der Datenschutzerklärung von Railway: 
              <a href="https://railway.app/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                https://railway.app/legal/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
              dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">
              Infinity Creators<br />
              Cornelius Gross<br />
              Hauptstrasse 21<br />
              CH-9053 Teufen AR<br />
              Schweiz
            </p>
            <p className="mt-2">
              E-Mail: info.infinitycreators@gmail.com
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
              Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
              berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
              werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
              Ihrer personenbezogenen Daten haben.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
              eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
              erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres 
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Registrierung auf dieser Website</h3>
            <p>
              Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen zu nutzen. Die dazu 
              eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes, 
              für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen 
              vollständig angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
              inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
              von Anschlussfragen bei uns gespeichert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Zahlungsanbieter</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Stripe</h3>
            <p>
              Anbieter für Kunden innerhalb der EU ist die Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, 
              Grand Canal Dock, Dublin, Irland (nachfolgend „Stripe").
            </p>
            <p className="mt-2">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. 
              Details finden Sie hier: 
              <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                https://stripe.com/de/privacy
              </a>
            </p>
            <p className="mt-2">
              Details entnehmen Sie der Datenschutzerklärung von Stripe: 
              <a href="https://stripe.com/de/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                https://stripe.com/de/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Recht auf Auskunft über Ihre bei uns gespeicherten Daten</li>
              <li>Recht auf Berichtigung unrichtiger Daten</li>
              <li>Recht auf Löschung Ihrer Daten</li>
              <li>Recht auf Einschränkung der Datenverarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
              <li>Recht auf Widerspruch gegen die Datenverarbeitung</li>
              <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
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
