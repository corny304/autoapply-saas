# Deployment Guide - AutoApply SaaS

## 🎯 Deployment-Optionen

### Option 1: Vercel (Frontend) + Railway (Backend) ⭐ EMPFOHLEN

**Vorteile:**
- Schnell, einfach, skalierbar
- Automatische SSL
- Serverless Frontend
- Managed Postgres/Redis

**Kosten:** ~$20-40/Monat

### Option 2: Cloudflare Workers + Pages

**Vorteile:**
- Sehr günstig
- Global CDN
- R2 Storage (S3-kompatibel)

**Kosten:** ~$5-15/Monat

---

## 🚀 Deployment: Vercel + Railway

### 1. Frontend auf Vercel

```bash
cd apps/web
vercel deploy --prod
```

Environment Variables in Vercel Dashboard:
```
NEXT_PUBLIC_API_URL=https://your-api.railway.app
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
NEXT_PUBLIC_STRIPE_PRICE_STANDARD=price_...
NEXT_PUBLIC_STRIPE_PRICE_PREMIUM=price_...
```

### 2. Backend auf Railway

1. Gehe zu https://railway.app
2. New Project → Deploy from GitHub
3. Wähle: `apps/api`
4. Add Service: PostgreSQL
5. Add Service: Redis
6. Environment Variables:

```
DATABASE_URL=${{Postgres.DATABASE_URL}}
REDIS_URL=${{Redis.REDIS_URL}}
S3_ENDPOINT=https://your-bucket.r2.cloudflarestorage.com
S3_ACCESS_KEY=...
S3_SECRET_KEY=...
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=...
SMTP_PASSWORD=...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3. Stripe Webhooks

1. Gehe zu: https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://your-api.railway.app/api/stripe/webhook`
3. Events auswählen:
   - `checkout.session.completed`
   - `invoice.payment_succeeded`
   - `customer.subscription.deleted`
4. Kopiere Webhook Secret → `STRIPE_WEBHOOK_SECRET`

### 4. Migrations ausführen

```bash
railway run psql $DATABASE_URL < infra/migrations/001_init_combined.sql
```

---

## 🌍 Deployment: Cloudflare

### 1. Frontend auf Cloudflare Pages

```bash
cd apps/web
npx wrangler pages deploy .next --project-name=autoapply
```

### 2. Backend auf Cloudflare Workers (Advanced)

Requires refactoring to Hono.js / worker-compatible framework.
