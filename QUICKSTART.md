# AutoApply Quick Start Guide

## 🚀 Schnellstart (5 Minuten)

### 1. Projekt klonen & Setup

```bash
cd C:\autoapply-saas
copy .env.example .env
```

Bearbeite `.env` und füge deine Stripe Keys ein.

### 2. Datenbank initialisieren

```bash
docker-compose up -d postgres redis minio
timeout /t 5
```

Führe Migrations aus:

```bash
cd infra\migrations
type 001_init_part1.sql 001_init_part2.sql 001_init_part3.sql 001_init_part4.sql 001_init_part5.sql > 001_init_combined.sql
psql -h localhost -U autoapply -d autoapply -f 001_init_combined.sql
```

Password: `autoapply`

### 3. Services starten

```bash
docker-compose up -d
```

### 4. Zugriff

- **Frontend**: http://localhost:3000
- **API**: http://localhost:8000
- **API Docs**: http://localhost:8000/docs
- **MailHog** (Email Test): http://localhost:8025
- **MinIO** (Storage): http://localhost:9001 (Login: minio/minio123)

## 📦 Lokale Entwicklung

### API (Backend)

```bash
cd apps/api
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn api.app.main:app --reload
```

### Web (Frontend)

```bash
cd apps/web
npm install
npm run dev
```

## 🧪 Testen

1. Registriere einen Account unter http://localhost:3000/register
2. Lade einen CV hoch (PDF/DOCX)
3. Konfiguriere Job-Präferenzen
4. Starte eine Job-Suche
5. Prüfe Bewerbungen unter http://localhost:3000/dashboard/bewerbungen
6. Exportiere Nachweise unter http://localhost:3000/dashboard/nachweise

## 🔧 Troubleshooting

**Problem**: Postgres startet nicht
**Lösung**: `docker-compose down -v && docker-compose up -d postgres`

**Problem**: API kann nicht auf MinIO zugreifen
**Lösung**: Prüfe ob MinIO läuft: `docker ps | findstr minio`

**Problem**: Worker verarbeitet keine Jobs
**Lösung**: `docker-compose logs worker`

## 📝 Nächste Schritte

1. ✅ Stripe Webhook einrichten (siehe DEPLOYMENT.md)
2. ✅ Production SMTP konfigurieren (Mailgun/Postmark)
3. ✅ Deployment auf Vercel/Railway (siehe DEPLOYMENT.md)
