# AutoApply - Automatische Bewerbungen mit Jobcenter-Nachweis

## 🚀 Features

- **Vollautomatische Bewerbungen**: CV hochladen, Jobs finden, Anschreiben generieren, versenden
- **E-Mail + Portal-Bewerbungen**: Greenhouse, Lever, Workday Support
- **Jobcenter-Nachweise**: PDF/CSV Export mit Versandbelegen
- **Intelligentes Matching**: Score-basiert, verhindert unpassende Bewerbungen
- **Autopilot-Modus**: Regelbasiert, sicher, transparent
- **DSGVO-konform**: EU-Hosting, verschlüsselt, Retention Policy

## 📦 Tech Stack

**Backend:**
- FastAPI (Python)
- PostgreSQL
- Redis (BullMQ/RQ)
- MinIO/S3
- Playwright (Portal-Automation)

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Stripe Billing

## 🏗️ Projekt-Struktur

```
autoapply-saas/
├── apps/
│   ├── api/          # FastAPI Backend
│   └── web/          # Next.js Frontend
├── infra/
│   └── docker-compose.yml
├── portal_templates/ # ATS Templates
└── packages/         # Shared Code
```

## 🐳 Quick Start (Docker)

```bash
# 1. Environment Variables
cp .env.example .env

# 2. Start all services
docker-compose up -d

# 3. Run migrations
docker-compose exec api python -m alembic upgrade head

# 4. Access
Frontend: http://localhost:3000
API: http://localhost:8000
MailHog: http://localhost:8025
MinIO: http://localhost:9001
```

## 🔧 Development

**API:**
```bash
cd apps/api
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn api.app.main:app --reload
```

**Web:**
```bash
cd apps/web
npm install
npm run dev
```

## 📝 Environment Variables

```env
# Database
DATABASE_URL=postgresql://...

# Redis
REDIS_URL=redis://localhost:6379/0

# S3/MinIO
S3_ENDPOINT=http://minio:9000
S3_ACCESS_KEY=minio
S3_SECRET_KEY=minio123
S3_BUCKET=autoapply

# SMTP
SMTP_HOST=mailhog
SMTP_PORT=1025
SMTP_FROM="AutoApply <noreply@autoapply.local>"

# Stripe
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PRICE_STANDARD=price_...
NEXT_PUBLIC_STRIPE_PRICE_PREMIUM=price_...

# App
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🎯 MVP Roadmap

- [x] DB Schema + Migrations
- [x] Document Upload + CV Parsing
- [x] Job Fetch (Arbeitsagentur API)
- [x] Matching Score + Filtering
- [x] Cover Letter Generator (LLM)
- [x] Email Sending (SMTP)
- [x] Portal Automation (Greenhouse)
- [x] Proof Export (PDF)
- [x] Autopilot Mode
- [x] Stripe Billing
- [x] Landing Page + Onboarding
- [x] Dashboard

## 📄 License

Proprietary - Corny Gross 2026
