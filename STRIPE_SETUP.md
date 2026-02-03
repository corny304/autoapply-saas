# Stripe-Integration Setup

## Übersicht

Diese Anwendung verwendet Stripe für Zahlungsabwicklung und Abo-Verwaltung.

## 🔧 Konfiguration

### 1. Stripe-Account einrichten

1. Erstellen Sie einen Account auf [stripe.com](https://stripe.com)
2. Gehen Sie zu **Developers** → **API keys**
3. Kopieren Sie Ihren **Secret key** (beginnt mit `sk_test_...` oder `sk_live_...`)

### 2. Produkte und Preise erstellen

Erstellen Sie in Ihrem Stripe Dashboard zwei Produkte:

#### Pro Plan
- **Name**: AutoApply Pro
- **Preis**: 29 EUR / Monat
- **Wiederkehrend**: Monatlich
- Kopieren Sie die **Price ID** (beginnt mit `price_...`)

#### Business Plan
- **Name**: AutoApply Business
- **Preis**: 79 EUR / Monat
- **Wiederkehrend**: Monatlich
- Kopieren Sie die **Price ID** (beginnt mit `price_...`)

### 3. Webhook einrichten

1. Gehen Sie zu **Developers** → **Webhooks**
2. Klicken Sie auf **Add endpoint**
3. **Endpoint URL**: `https://autoapply-saas-production.up.railway.app/stripe/webhook`
4. **Events auswählen**:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
5. Kopieren Sie den **Signing secret** (beginnt mit `whsec_...`)

### 4. Umgebungsvariablen setzen

#### Railway (Backend)

Gehen Sie zu Ihrem Railway-Projekt → **Variables** und fügen Sie hinzu:

```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_PRO=price_...
STRIPE_PRICE_BUSINESS=price_...
```

#### Vercel (Frontend)

Gehen Sie zu Ihrem Vercel-Projekt → **Settings** → **Environment Variables** und fügen Sie hinzu:

```env
NEXT_PUBLIC_API_URL=https://autoapply-saas-production.up.railway.app
NEXT_PUBLIC_STRIPE_PRICE_PRO=price_...
NEXT_PUBLIC_STRIPE_PRICE_BUSINESS=price_...
```

**Wichtig**: Frontend-Variablen müssen mit `NEXT_PUBLIC_` beginnen!

## 🚀 Funktionsweise

### Checkout-Flow

1. Benutzer klickt auf "Jetzt upgraden" auf der Preise-Seite
2. Frontend ruft `/stripe/create-checkout-session` API auf
3. Backend erstellt Stripe Checkout Session
4. Benutzer wird zu Stripe Checkout weitergeleitet
5. Nach erfolgreicher Zahlung → Redirect zu `/success`
6. Stripe sendet Webhook an Backend
7. Backend verarbeitet Webhook und aktiviert Subscription

### Webhook-Events

- **checkout.session.completed**: Checkout abgeschlossen
- **customer.subscription.created**: Neues Abo erstellt
- **customer.subscription.updated**: Abo aktualisiert (z.B. Plan-Wechsel)
- **customer.subscription.deleted**: Abo gekündigt
- **invoice.payment_succeeded**: Zahlung erfolgreich
- **invoice.payment_failed**: Zahlung fehlgeschlagen

### Customer Portal

Benutzer können ihr Abo verwalten über:
- Plan upgraden/downgraden
- Zahlungsmethode ändern
- Abo kündigen
- Rechnungen herunterladen

API-Endpunkt: `/stripe/create-portal-session`

## 📊 API-Endpunkte

### POST `/stripe/create-checkout-session`

Erstellt eine Checkout Session.

**Request:**
```json
{
  "price_id": "price_...",
  "success_url": "https://autoapply-saas.vercel.app/success?session_id={CHECKOUT_SESSION_ID}",
  "cancel_url": "https://autoapply-saas.vercel.app/preise",
  "customer_email": "user@example.com"
}
```

**Response:**
```json
{
  "checkout_url": "https://checkout.stripe.com/...",
  "session_id": "cs_test_..."
}
```

### POST `/stripe/create-portal-session`

Erstellt eine Customer Portal Session.

**Request:**
```json
{
  "customer_id": "cus_...",
  "return_url": "https://autoapply-saas.vercel.app/account"
}
```

**Response:**
```json
{
  "portal_url": "https://billing.stripe.com/..."
}
```

### POST `/stripe/webhook`

Webhook-Endpunkt für Stripe-Events.

**Headers:**
- `stripe-signature`: Webhook-Signatur

### GET `/stripe/prices`

Gibt alle verfügbaren Preispläne zurück.

**Response:**
```json
{
  "starter": { ... },
  "pro": { ... },
  "business": { ... }
}
```

### GET `/stripe/subscription/{customer_id}`

Ruft die aktuelle Subscription eines Kunden ab.

**Response:**
```json
{
  "subscription_id": "sub_...",
  "status": "active",
  "current_period_end": 1234567890,
  "cancel_at_period_end": false,
  "plan": "price_..."
}
```

## 🧪 Testing

### Test-Kreditkarten

Stripe bietet Test-Kreditkarten für verschiedene Szenarien:

- **Erfolgreiche Zahlung**: `4242 4242 4242 4242`
- **Fehlgeschlagene Zahlung**: `4000 0000 0000 0002`
- **3D Secure erforderlich**: `4000 0027 6000 3184`

Alle Test-Karten:
- **Ablaufdatum**: Beliebiges zukünftiges Datum
- **CVC**: Beliebige 3 Ziffern
- **PLZ**: Beliebige 5 Ziffern

### Webhook-Testing lokal

Verwenden Sie Stripe CLI für lokales Webhook-Testing:

```bash
stripe listen --forward-to localhost:8000/stripe/webhook
```

## 🔒 Sicherheit

- ✅ Webhook-Signatur-Verifizierung implementiert
- ✅ API-Keys als Umgebungsvariablen
- ✅ HTTPS für alle Requests
- ✅ Keine sensiblen Daten im Frontend

## 📝 Nächste Schritte

1. **Datenbank-Integration**: Subscriptions in PostgreSQL speichern
2. **User-Authentifizierung**: Login/Logout implementieren
3. **Account-Seite**: Abo-Status und Verwaltung anzeigen
4. **E-Mail-Benachrichtigungen**: Bei Zahlungen und Abo-Änderungen
5. **Produktions-Modus**: Von Test-Keys zu Live-Keys wechseln

## 🐛 Troubleshooting

### Webhook funktioniert nicht

- Überprüfen Sie die Webhook-URL in Stripe Dashboard
- Testen Sie mit `stripe trigger checkout.session.completed`
- Prüfen Sie Railway-Logs: `railway logs`

### Checkout-Session erstellen schlägt fehl

- Überprüfen Sie `STRIPE_SECRET_KEY` in Railway
- Prüfen Sie, ob Price IDs korrekt sind
- Schauen Sie in Railway-Logs nach Fehlermeldungen

### Frontend kann Backend nicht erreichen

- Überprüfen Sie `NEXT_PUBLIC_API_URL` in Vercel
- Prüfen Sie CORS-Einstellungen im Backend
- Testen Sie API direkt: `curl https://autoapply-saas-production.up.railway.app/stripe/prices`

## 📚 Ressourcen

- [Stripe Dokumentation](https://stripe.com/docs)
- [Stripe API Reference](https://stripe.com/docs/api)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Stripe Testing](https://stripe.com/docs/testing)
