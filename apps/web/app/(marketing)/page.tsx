import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bewerbungen automatisch.<br />
          Nachweise perfekt.<br />
          Jobcenter zufrieden.
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AutoApply erstellt professionelle Bewerbungen vollautomatisch und 
          liefert rechtssichere Nachweise fürs Jobcenter.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/register" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700"
          >
            Jetzt starten →
          </Link>
          <Link 
            href="/preise" 
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50"
          >
            Preise ansehen
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          ✓ 3 Bewerbungen gratis • ✓ DSGVO-konform • ✓ Jederzeit kündbar
        </p>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">So funktioniert es</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-semibold mb-2">1. CV hochladen</h3>
              <p className="text-gray-600">Einmal hochladen, System extrahiert alle Daten</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold mb-2">2. Jobs finden</h3>
              <p className="text-gray-600">Automatische Suche passender Stellen</p>
            </div>
            <div>
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="font-semibold mb-2">3. Versand + Nachweis</h3>
              <p className="text-gray-600">Bewerbung raus, Beleg für Jobcenter fertig</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
