# Docker Installation für Windows

## 🐳 Docker Desktop installieren

### Schritt 1: Download
Gehe zu: https://www.docker.com/products/docker-desktop/

**ODER** direkt herunterladen:
https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe

### Schritt 2: Installation
1. Führe den Installer aus
2. Folge dem Installationsassistenten
3. Aktiviere WSL 2 Backend (wenn gefragt)
4. Starte den Computer neu

### Schritt 3: Docker starten
1. Öffne Docker Desktop
2. Warte bis "Docker Desktop is running" erscheint
3. Öffne PowerShell/CMD und teste:
```bash
docker --version
docker compose version
```

### Schritt 4: AutoApply starten
```bash
cd C:\autoapply-saas
docker compose up -d
```

---

## ⚡ Alternative: Docker ohne Desktop (Podman)

Falls Docker Desktop zu groß ist:

```bash
winget install RedHat.Podman-Desktop
```

Dann statt `docker` einfach `podman` verwenden.

---

## 🔧 Troubleshooting

**Problem**: WSL 2 Installation erforderlich
**Lösung**: 
```bash
wsl --install
```

**Problem**: "Docker daemon is not running"
**Lösung**: Starte Docker Desktop neu

**Problem**: Virtualisierung deaktiviert
**Lösung**: Aktiviere in BIOS: Intel VT-x / AMD-V
