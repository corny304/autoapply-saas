# AutoApply - Quick Start Script
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   AutoApply Setup Checker" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check Docker
Write-Host "[1/4] Prüfe Docker..." -ForegroundColor Yellow
$dockerInstalled = $false
try {
    $dockerVersion = docker --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        $dockerInstalled = $true
        Write-Host "✓ Docker gefunden: $dockerVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Docker nicht gefunden" -ForegroundColor Red
}

# Check Python
Write-Host "[2/4] Prüfe Python..." -ForegroundColor Yellow
$pythonInstalled = $false
try {
    $pythonVersion = python --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        $pythonInstalled = $true
        Write-Host "✓ Python gefunden: $pythonVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Python nicht gefunden" -ForegroundColor Red
}

# Check Node.js
Write-Host "[3/4] Prüfe Node.js..." -ForegroundColor Yellow
$nodeInstalled = $false
try {
    $nodeVersion = node --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        $nodeInstalled = $true
        Write-Host "✓ Node.js gefunden: $nodeVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Node.js nicht gefunden" -ForegroundColor Red
}

# Check PostgreSQL
Write-Host "[4/4] Prüfe PostgreSQL..." -ForegroundColor Yellow
$postgresInstalled = $false
try {
    $psqlVersion = psql --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        $postgresInstalled = $true
        Write-Host "✓ PostgreSQL gefunden: $psqlVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ PostgreSQL nicht gefunden" -ForegroundColor Red
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "   Empfehlung" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

if ($dockerInstalled) {
    Write-Host "🐳 DOCKER GEFUNDEN!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Empfohlener Workflow:" -ForegroundColor White
    Write-Host "1. docker compose up -d" -ForegroundColor Yellow
    Write-Host "2. Warte 10 Sekunden" -ForegroundColor Yellow
    Write-Host "3. docker compose exec postgres psql -U autoapply -d autoapply -f /docker-entrypoint-initdb.d/001_init.sql" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Siehe: QUICKSTART.md" -ForegroundColor Cyan
} elseif ($pythonInstalled -and $nodeInstalled -and $postgresInstalled) {
    Write-Host "⚡ LOKALE ENTWICKLUNG MÖGLICH!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Du hast alles für lokales Development ohne Docker!" -ForegroundColor White
    Write-Host ""
    Write-Host "Siehe: DEV_WITHOUT_DOCKER.md" -ForegroundColor Cyan
} else {
    Write-Host "⚠️ SETUP ERFORDERLICH" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Du brauchst entweder:" -ForegroundColor White
    Write-Host ""
    Write-Host "Option A: Docker" -ForegroundColor Yellow
    Write-Host "  → Siehe: DOCKER_INSTALL.md" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Option B: Python + Node.js + PostgreSQL" -ForegroundColor Yellow
    Write-Host "  → Siehe: DEV_WITHOUT_DOCKER.md" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "Drücke Enter zum Beenden..."
Read-Host
