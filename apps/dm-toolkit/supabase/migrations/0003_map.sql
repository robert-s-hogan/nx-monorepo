-- dm-toolkit Phase 2: Visual map/token/combat tables. Run this once in the
-- Supabase SQL editor for the dm-toolkit project.

create table if not exists game_maps (
  id             uuid primary key default gen_random_uuid(),
  session_id     uuid not null references sessions(id) on delete cascade,
  name           text not null,
  background_url text,
  width          integer not null default 1000,
  height         integer not null default 1000,
  created_at     timestamptz not null default now()
);
create index if not exists idx_game_maps_session on game_maps(session_id);

-- Denormalizes hp/AC rather than always joining characters, since ad-hoc
-- enemy tokens have no character_id but still need combat stats.
create table if not exists map_tokens (
  id            uuid primary key default gen_random_uuid(),
  map_id        uuid not null references game_maps(id) on delete cascade,
  character_id  uuid references characters(id) on delete cascade,
  label         text not null,
  x             real not null,
  y             real not null,
  hidden        boolean not null default false,
  hp_current    integer,
  hp_max        integer,
  armor_class   integer,
  updated_at    timestamptz not null default now()
);
create index if not exists idx_map_tokens_map on map_tokens(map_id);

create table if not exists combat_events (
  id                  uuid primary key default gen_random_uuid(),
  map_id              uuid not null references game_maps(id) on delete cascade,
  attacker_token_id   uuid not null references map_tokens(id) on delete cascade,
  defender_token_id   uuid not null references map_tokens(id) on delete cascade,
  roll                integer not null,
  hit                 boolean not null,
  damage              integer not null default 0,
  defender_hp_after   integer not null,
  created_at          timestamptz not null default now()
);
create index if not exists idx_combat_events_map on combat_events(map_id);

alter table game_maps enable row level security;
alter table map_tokens enable row level security;
alter table combat_events enable row level security;

-- Realtime's postgres_changes enforces RLS per-role: with RLS on and no
-- policy, the anon-key client (used only for Realtime subscriptions —
-- see lib/supabaseClient.ts) would never receive change events at all, even
-- though it never queries these tables directly otherwise. So — unlike
-- every other table in this app — map_tokens/combat_events need an explicit
-- read-only policy for anon. Writes still only ever happen server-side via
-- the service-role key in pages/api/maps/*, which bypasses RLS entirely, so
-- this does not open up direct anon writes.
create policy "Allow realtime read" on map_tokens for select using (true);
create policy "Allow realtime read" on combat_events for select using (true);

-- Realtime is opt-in per table in Supabase — add these three to the
-- supabase_realtime publication so postgres_changes subscriptions fire.
alter publication supabase_realtime add table map_tokens;
alter publication supabase_realtime add table combat_events;
