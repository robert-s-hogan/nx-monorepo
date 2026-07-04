-- dm-toolkit Phase 0: Supabase schema, translated from the Turso/libSQL schema
-- previously created by scripts/migrate.ts (now removed). Run this once in the
-- Supabase SQL editor for the dm-toolkit project.

create extension if not exists pgcrypto;

create table if not exists campaigns (
  id                  uuid primary key default gen_random_uuid(),
  name                text not null,
  progression_system  text not null default 'dnd5e',
  session_mode        text not null default 'freeform',
  current_xp          integer not null default 0,
  number_of_players   integer not null default 4,
  created_at          timestamptz not null default now()
);

-- Nested/variable-shape character data (stats, ability_categories, random_skills,
-- status_effects) lives in `data` as jsonb — read/written wholesale by the
-- editor, never queried column-by-column.
create table if not exists characters (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  data        jsonb not null,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists sessions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  campaign_id uuid references campaigns(id) on delete set null,
  created_at  timestamptz not null default now()
);

-- Normalizes Session.active_character_ids so membership changes don't require
-- rewriting a JSON blob.
create table if not exists session_characters (
  session_id    uuid not null references sessions(id) on delete cascade,
  character_id  uuid not null references characters(id) on delete cascade,
  primary key (session_id, character_id)
);
create index if not exists idx_session_characters_session on session_characters(session_id);
create index if not exists idx_session_characters_character on session_characters(character_id);

-- RLS enabled with zero policies (default-deny) on every table. The anon key
-- used client-side is Realtime-subscribe only — it never queries these tables
-- directly, so no policies are needed. All actual reads/writes go through
-- Next.js API routes using the service-role key, which bypasses RLS entirely.
alter table campaigns enable row level security;
alter table characters enable row level security;
alter table sessions enable row level security;
alter table session_characters enable row level security;
