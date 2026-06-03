-- ============================================================
-- DohaHappyEndings — Supabase Schema
-- Run this in your Supabase SQL editor (dashboard.supabase.com)
-- ============================================================

-- Enable UUID extension (already on by default in Supabase)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ── Giver Profiles ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS giver_profiles (
  id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  stage_name      TEXT NOT NULL,
  age             INT  NOT NULL CHECK (age >= 18 AND age <= 70),
  location        TEXT NOT NULL,
  bio             TEXT,
  hourly_rate     NUMERIC(10,2) NOT NULL DEFAULT 0,
  overnight_rate  NUMERIC(10,2),
  currency        TEXT NOT NULL DEFAULT 'QAR',
  services        TEXT[]  NOT NULL DEFAULT '{}',
  photos          TEXT[]  NOT NULL DEFAULT '{}',
  verified        BOOLEAN NOT NULL DEFAULT FALSE,
  premium         BOOLEAN NOT NULL DEFAULT FALSE,
  active          BOOLEAN NOT NULL DEFAULT TRUE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ── Client Profiles ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS client_profiles (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id       UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name  TEXT NOT NULL,
  age           INT  NOT NULL CHECK (age >= 18),
  location      TEXT,
  budget        NUMERIC(10,2),
  preferences   TEXT[] NOT NULL DEFAULT '{}',
  premium       BOOLEAN NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ── Bookings ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS bookings (
  id            UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  giver_id      UUID NOT NULL REFERENCES giver_profiles(user_id),
  client_id     UUID NOT NULL REFERENCES client_profiles(user_id),
  service_type  TEXT NOT NULL,
  scheduled_at  TIMESTAMPTZ NOT NULL,
  duration_hrs  NUMERIC(4,1) NOT NULL DEFAULT 1,
  total_qar     NUMERIC(10,2) NOT NULL,
  status        TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending','confirmed','completed','cancelled')),
  notes         TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Messages ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS messages (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  sender_id   UUID NOT NULL REFERENCES auth.users(id),
  receiver_id UUID NOT NULL REFERENCES auth.users(id),
  body        TEXT NOT NULL,
  read        BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ── Reviews ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS reviews (
  id          UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  booking_id  UUID NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES auth.users(id),
  giver_id    UUID NOT NULL REFERENCES giver_profiles(user_id),
  rating      INT  NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment     TEXT,
  anonymous   BOOLEAN NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(booking_id, reviewer_id)
);

-- ── Updated-at trigger ──────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE TRIGGER giver_profiles_updated_at
  BEFORE UPDATE ON giver_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE OR REPLACE TRIGGER client_profiles_updated_at
  BEFORE UPDATE ON client_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Row-Level Security (RLS) ────────────────────────────────
ALTER TABLE giver_profiles  ENABLE ROW LEVEL SECURITY;
ALTER TABLE client_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings        ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages        ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews         ENABLE ROW LEVEL SECURITY;

-- Giver profiles: anyone can read verified+active givers; owner can write
CREATE POLICY "public read giver profiles"
  ON giver_profiles FOR SELECT
  USING (verified = TRUE AND active = TRUE);

CREATE POLICY "giver owner write"
  ON giver_profiles FOR ALL
  USING (auth.uid() = user_id);

-- Client profiles: private — only the owner
CREATE POLICY "client owner only"
  ON client_profiles FOR ALL
  USING (auth.uid() = user_id);

-- Bookings: visible to the giver or client in the booking
CREATE POLICY "booking participants"
  ON bookings FOR ALL
  USING (auth.uid() = giver_id OR auth.uid() = client_id);

-- Messages: sender or receiver
CREATE POLICY "message participants"
  ON messages FOR ALL
  USING (auth.uid() = sender_id OR auth.uid() = receiver_id);

-- Reviews: public reads; only the reviewer can write
CREATE POLICY "public read reviews"
  ON reviews FOR SELECT USING (TRUE);

CREATE POLICY "reviewer write"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = reviewer_id);

-- ── Indexes ─────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_giver_profiles_verified  ON giver_profiles(verified, active);
CREATE INDEX IF NOT EXISTS idx_giver_profiles_location  ON giver_profiles(location);
CREATE INDEX IF NOT EXISTS idx_bookings_giver           ON bookings(giver_id);
CREATE INDEX IF NOT EXISTS idx_bookings_client          ON bookings(client_id);
CREATE INDEX IF NOT EXISTS idx_messages_receiver        ON messages(receiver_id, read);
