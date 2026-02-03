'use client';

import Link from 'next/link';
import { useState } from 'react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://autoapply-saas-production.up.railway.app';

export default function PreisePage() {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, plan: string) => {
    setLoading(plan);
    
    try {
      const response = await fetch(`${API_URL}/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price_id: priceId,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/preise`,
        }),
      });

      const data = await response.json();
      
      if (data.checkout_url) {
        // Redirect zu Stripe Checkout
        window.location.href = data.checkout_url;
      } else {
        alert('Fehler beim Erstellen der Checkout-Session');
        setLoading(null);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Einfache, faire Preise
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wählen Sie das Paket, das zu Ihnen passt. Keine versteckten Kosten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Kostenlos</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>3 Bewerbungen gratis</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Jobcenter-Nachweise</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>DSGVO-konform</span>
              </li>
            </ul>
            <Link 
              href="/register" 
              className="block w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold text-center hover:bg-gray-200"
            >
              Jetzt starten
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-4 border-blue-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Beliebt
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">29€</span>
              <span className="text-gray-600">/Monat</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>50 Bewerbungen/Monat</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Automatische Job-Suche</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Alle Starter-Features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Priority Support</span>
              </li>
            </ul>
            <button
              onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO || '', 'pro')}
              disabled={loading === 'pro'}
              className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === 'pro' ? 'Wird geladen...' : 'Jetzt upgraden'}
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-200">
            <h3 className="text-2xl font-bold mb-2">Business</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">79€</span>
              <span className="text-gray-600">/Monat</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Unbegrenzte Bewerbungen</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>KI-Optimierung</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Alle Pro-Features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Dedizierter Account Manager</span>
              </li>
            </ul>
            <button
              onClick={() => handleCheckout(process.env.NEXT_PUBLIC_STRIPE_PRICE_BUSINESS || '', 'business')}
              disabled={loading === 'business'}
              className="block w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading === 'business' ? 'Wird geladen...' : 'Kontakt aufnehmen'}
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Alle Pläne beinhalten: 14 Tage Geld-zurück-Garantie • Jederzeit kündbar • Keine Vertragsbindung
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
