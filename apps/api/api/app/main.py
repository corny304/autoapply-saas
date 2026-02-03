from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.app.routers import documents, profile, jobs, matches, applications, proof, autopilot, stripe_payments

app = FastAPI(title="AutoApply API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(documents.router, prefix="/documents", tags=["documents"])
app.include_router(profile.router, prefix="/profile", tags=["profile"])
app.include_router(jobs.router, prefix="/jobs", tags=["jobs"])
app.include_router(matches.router, prefix="/matches", tags=["matches"])
app.include_router(applications.router, prefix="/applications", tags=["applications"])
app.include_router(proof.router, prefix="/proof", tags=["proof"])
app.include_router(autopilot.router, prefix="/autopilot", tags=["autopilot"])
app.include_router(stripe_payments.router, prefix="/stripe", tags=["stripe"])

@app.get("/")
def root():
    return {"message": "AutoApply API", "version": "0.1.0"}

@app.get("/health")
def health():
    return {"status": "ok"}
