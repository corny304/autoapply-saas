-- 001_init.sql - Part 1: Base tables
CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$ BEGIN
  CREATE TYPE match_status AS ENUM ('found', 'rejected', 'shortlisted');
  CREATE TYPE application_status AS ENUM ('draft', 'ready', 'queued', 'sent', 'failed', 'needs_action');
  CREATE TYPE application_channel AS ENUM ('email', 'portal');
  CREATE TYPE document_type AS ENUM ('cv', 'certificate', 'cover_letter', 'cv_variant', 'other', 'proof_pdf', 'proof_csv');
  CREATE TYPE apply_session_status AS ENUM ('created', 'running', 'needs_action', 'completed', 'failed');
EXCEPTION WHEN duplicate_object THEN null; END $$;

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  locale TEXT DEFAULT 'de-DE',
  timezone TEXT DEFAULT 'Europe/Berlin',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subscriptions (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  plan TEXT NOT NULL DEFAULT 'free',
  status TEXT NOT NULL DEFAULT 'active',
  credits_monthly INT NOT NULL DEFAULT 3,
  credits_used INT NOT NULL DEFAULT 0,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  renew_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
