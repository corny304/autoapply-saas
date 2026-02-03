# Lokales Development OHNE Docker

## 🎯 Setup (15 Minuten)

### 1️⃣ PostgreSQL installieren

**Download**: https://www.postgresql.org/download/windows/

**Installation:**
```bash
# Installiere PostgreSQL 16
# Standard Port: 5432
# Passwort setzen: autoapply
```

**Datenbank erstellen:**
```bash
# Öffne SQL Shell (psql)
CREATE DATABASE autoapply;
CREATE USER autoapply WITH PASSWORD 'autoapply';
GRANT ALL PRIVILEGES ON DATABASE autoapply TO autoapply;
```

**Migrations ausführen:**
```bash
cd C:\autoapply-saas\infra\migrations
psql -U autoapply -d autoapply -f 001_init.sql
# Password: autoapply
```

---

### 2️⃣ Redis installieren

**Option A - Memurai (Redis für Windows):**
```bash
winget install Memurai.Memurai-Developer
```

**Option B - WSL + Redis:**
```bash
wsl --install
wsl
sudo apt update
sudo apt install redis-server
redis-server --daemonize yes
```

---

### 3️⃣ Python Backend starten

```bash
cd C:\autoapply-saas\apps\api

# Virtual Environment
python -m venv venv
venv\Scripts\activate

# Dependencies
pip install -r requirements.txt

# Playwright Browser
playwright install chromium

# Environment
copy ..\..\\.env.example .env
# Bearbeite .env:
# DATABASE_URL=postgresql+psycopg://autoapply:autoapply@localhost:5432/autoapply
# REDIS_URL=redis://localhost:6379/0

# Starte API
uvicorn api.app.main:app --reload --port 8000
```

**API läuft auf**: http://localhost:8000

---

### 4️⃣ Next.js Frontend starten

```bash
cd C:\autoapply-saas\apps\web

# Dependencies
npm install

# Environment
echo NEXT_PUBLIC_API_URL=http://localhost:8000 > .env.local
echo NEXT_PUBLIC_APP_URL=http://localhost:3000 >> .env.local

# Starte Dev Server
npm run dev
```

**Frontend läuft auf**: http://localhost:3000

---

### 5️⃣ Worker starten (optional)

```bash
cd C:\autoapply-saas\apps\api
venv\Scripts\activate

# Starte RQ Worker
rq worker -u redis://localhost:6379/0 parse_documents fetch_jobs generate_docs send_email build_proof portal_apply
```

---

## 🧪 Testen

1. **API**: http://localhost:8000/docs
2. **Frontend**: http://localhost:3000
3. **Health Check**: http://localhost:8000/health

---

## 📦 Was fehlt noch?

**Für vollständiges Testing brauchst du noch:**
- MinIO (S3-Alternative) → verwende AWS S3 Free Tier stattdessen
- MailHog → Emails werden einfach nicht versendet (OK für Dev)

---

## ⚡ Quick Commands

```bash
# Start Postgres (als Service)
net start postgresql-x64-16

# Start Redis (Memurai)
net start Memurai

# Start API
cd C:\autoapply-saas\apps\api
venv\Scripts\activate
uvicorn api.app.main:app --reload

# Start Frontend
cd C:\autoapply-saas\apps\web
npm run dev
```
