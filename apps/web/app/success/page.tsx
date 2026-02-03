'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zahlung erfolgreich!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Vielen Dank für Ihr Abonnement. Ihr Account wurde erfolgreich aktiviert.
          </p>

          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                Session ID: <span className="font-mono text-xs">{sessionId}</span>
              </p>
            </div>
          )}

          {/* Next Steps */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Was passiert jetzt?
            </h2>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-start">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <h3 className="font-semibold">Bestätigungs-E-Mail</h3>
                  <p className="text-gray-600 text-sm">
                    Sie erhalten eine E-Mail mit allen Details zu Ihrem Abonnement.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">🚀</span>
                <div>
                  <h3 className="font-semibold">Sofortiger Zugriff</h3>
                  <p className="text-gray-600 text-sm">
                    Ihr Account ist jetzt freigeschaltet und Sie können sofort loslegen.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-3">💳</span>
                <div>
                  <h3 className="font-semibold">Abo-Verwaltung</h3>
                  <p className="text-gray-600 text-sm">
                    Sie können Ihr Abonnement jederzeit in Ihrem Account verwalten.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Zum Dashboard
            </Link>
            <Link
              href="/"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200"
            >
              Zur Startseite
            </Link>
          </div>
        </div>

        {/* Support Link */}
        <p className="mt-8 text-gray-600">
          Fragen? Kontaktieren Sie uns unter{' '}
          <a href="mailto:support@autoapply.de" className="text-blue-600 hover:underline">
            support@autoapply.de
          </a>
        </p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Lädt...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
