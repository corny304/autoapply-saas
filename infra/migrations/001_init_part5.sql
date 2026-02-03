-- 001_init.sql - Part 5: Portal & Autopilot
CREATE TABLE IF NOT EXISTS apply_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  application_id UUID NOT NULL REFERENCES applications(id) ON DELETE CASCADE,
  status apply_session_status NOT NULL DEFAULT 'created',
  provider TEXT NOT NULL,
  job_url TEXT NOT NULL,
  current_step TEXT,
  storage_state_key TEXT,
  last_error JSONB,
  screenshots JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_apply_sessions_user ON apply_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_apply_sessions_status ON apply_sessions(status);

CREATE TABLE IF NOT EXISTS autopilot_settings (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  enabled BOOLEAN NOT NULL DEFAULT false,
  min_score INT NOT NULL DEFAULT 75,
  max_per_day INT NOT NULL DEFAULT 3,
  max_per_company_per_month INT NOT NULL DEFAULT 1,
  exclude_experience_mismatch BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_applications_updated_at BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_subscriptions_updated_at BEFORE UPDATE ON subscriptions FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_apply_sessions_updated_at BEFORE UPDATE ON apply_sessions FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER trg_autopilot_settings_updated_at BEFORE UPDATE ON autopilot_settings FOR EACH ROW EXECUTE FUNCTION set_updated_at();
