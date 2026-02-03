# 🐳 Docker Installation - 5 Minuten Guide

## Schritt 1: Download & Installation

1. ✅ **Download-Seite ist bereits geöffnet** (https://www.docker.com/products/docker-desktop/)
2. Klicke auf **"Download for Windows"**
3. Führe **Docker Desktop Installer.exe** aus
4. Folge dem Installer:
   - ✅ "Use WSL 2 instead of Hyper-V" (empfohlen)
   - ✅ "Add shortcut to desktop"
5. **Neustart** erforderlich!

---

## Schritt 2: Docker Desktop starten

1. Nach Neustart: Öffne **Docker Desktop**
2. Warte bis **"Docker Desktop is running"** erscheint (grünes Icon unten rechts)
3. **Fertig!** Docker läuft jetzt

---

## Schritt 3: AutoApply starten

Öffne PowerShell und führe aus:

```powershell
cd C:\autoapply-saas

# Docker Compose starten
docker compose up -d

# Warte 15 Sekunden bis alles läuft
Start-Sleep -Seconds 15

# Migrations ausführen
docker compose exec postgres psql -U autoapply -d autoapply < infra\migrations\001_init.sql

# Browser öffnen
Start-Process "http://localhost:3000"
Start-Process "http://localhost:8000/docs"
Start-Process "http://localhost:8025"
```

---

## ✅ Das läuft dann:

- **Frontend**: http://localhost:3000
- **API Docs**: http://localhost:8000/docs  
- **MailHog** (Test-Emails): http://localhost:8025
- **MinIO** (Storage): http://localhost:9001

Login MinIO: `minio` / `minio123`

---

## 🔧 Troubleshooting

**Problem**: "WSL 2 installation is incomplete"

**Lösung**:
```powershell
wsl --install
wsl --update
```
Dann Computer neu starten.

---

**Problem**: "Docker daemon is not running"

**Lösung**: 
1. Öffne Docker Desktop
2. Warte bis grünes Icon erscheint
3. Versuche nochmal

---

**Problem**: Virtualisierung nicht aktiviert

**Lösung**:
1. Neustart → BIOS/UEFI
2. Aktiviere: Intel VT-x ODER AMD-V
3. Speichern und neu starten

---

## 🚀 Nach der Installation

Führe einfach diesen Befehl aus:

```powershell
cd C:\autoapply-saas
.\start-autoapply.ps1
```

(Ich erstelle dieses Script gleich für dich!)
