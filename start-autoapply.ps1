# AutoApply - Automatischer Start
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   AutoApply wird gestartet..." -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check Docker
Write-Host "[1/5] Prüfe Docker..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Docker gefunden: $dockerVersion" -ForegroundColor Green
    } else {
        throw "Docker nicht gefunden"
    }
} catch {
    Write-Host "✗ Docker ist nicht installiert!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Bitte installiere Docker Desktop:" -ForegroundColor Yellow
    Write-Host "Siehe: DOCKER_SETUP_GUIDE.md" -ForegroundColor Cyan
    Write-Host ""
    Read-Host "Drücke Enter zum Beenden"
    exit 1
}

Write-Host ""
Write-Host "[2/5] Starte Docker Services..." -ForegroundColor Yellow
docker compose up -d 2>&1 | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "✗ Docker Compose fehlgeschlagen!" -ForegroundColor Red
    Write-Host "Ist Docker Desktop gestartet?" -ForegroundColor Yellow
    Read-Host "Drücke Enter zum Beenden"
    exit 1
}

Write-Host "✓ Services gestartet (Postgres, Redis, MinIO, API, Web, Worker, MailHog)" -ForegroundColor Green
Write-Host ""

Write-Host "[3/5] Warte auf Postgres..." -ForegroundColor Yellow
Start-Sleep -Seconds 15
Write-Host "✓ Postgres sollte jetzt bereit sein" -ForegroundColor Green
Write-Host ""

Write-Host "[4/5] Führe Datenbank-Migrations aus..." -ForegroundColor Yellow
$migrationPath = "infra\migrations\001_init.sql"
if (Test-Path $migrationPath) {
    $result = docker compose exec -T postgres psql -U autoapply -d autoapply -f /docker-entrypoint-initdb.d/001_init.sql 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Datenbank initialisiert" -ForegroundColor Green
    } else {
        Write-Host "⚠ Migrations evtl. bereits ausgeführt (das ist OK)" -ForegroundColor Yellow
    }
} else {
    Write-Host "✗ Migration-Datei nicht gefunden: $migrationPath" -ForegroundColor Red
}

Write-Host ""
Write-Host "[5/5] Öffne Browser..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Start-Process "http://localhost:3000"
Start-Process "http://localhost:8000/docs"
Start-Process "http://localhost:8025"

Write-Host "✓ Browser geöffnet" -ForegroundColor Green
Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   AutoApply läuft jetzt!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Frontend:  http://localhost:3000" -ForegroundColor White
Write-Host "📡 API Docs:  http://localhost:8000/docs" -ForegroundColor White
Write-Host "📧 MailHog:   http://localhost:8025" -ForegroundColor White
Write-Host "💾 MinIO:     http://localhost:9001 (minio/minio123)" -ForegroundColor White
Write-Host ""
Write-Host "Zum Stoppen:" -ForegroundColor Yellow
Write-Host "  docker compose down" -ForegroundColor Cyan
Write-Host ""
Write-Host "Logs anzeigen:" -ForegroundColor Yellow
Write-Host "  docker compose logs -f" -ForegroundColor Cyan
Write-Host ""
Read-Host "Drücke Enter zum Beenden"
