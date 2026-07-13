-- dm-toolkit Phase 3: Investigatable map structures (Lego builds on the
-- tabletop) with per-skill checks, tiered outcomes, and a live event log that
-- can spawn a boss token. Run this once in the Supabase SQL editor for the
-- dm-toolkit project.

create table if not exists map_structures (
  id              uuid primary key default gen_random_uuid(),
  map_id          uuid not null references game_maps(id) on delete cascade,
  name            text not null,
  structure_type  text not null default 'building',
  x               real not null,
  y               real not null,
  width           real not null default 60,
  height          real not null default 60,
  revealed        boolean not null default true,
  created_at      timestamptz not null default now()
);
create index if not exists idx_map_structures_map on map_structures(map_id);

-- The rollable actions available on a structure (Investigation, History,
-- Perception, ...). A structure can have several — e.g. History reveals
-- lore, Investigation finds a trap.
create table if not exists structure_checks (
  id            uuid primary key default gen_random_uuid(),
  structure_id  uuid not null references map_structures(id) on delete cascade,
  skill         text not null,
  dc            integer not null,
  label         text not null,
  created_at    timestamptz not null default now()
);
create index if not exists idx_structure_checks_structure on structure_checks(structure_id);

-- One row per result tier a check can land on. damage/insight/item are all
-- optional and jsonb-free-shape on purpose (mirrors characters.data) since
-- outcome content varies per structure and is authored ad-hoc per session.
-- spawns_boss_character_id lets a bad (or great) roll spawn a boss token —
-- resolved server-side in lib/server/structureResolution.ts.
create table if not exists structure_outcomes (
  id                       uuid primary key default gen_random_uuid(),
  check_id                 uuid not null references structure_checks(id) on delete cascade,
  tier                     text not null check (tier in ('crit_fail', 'fail', 'success', 'crit_success')),
  narrative                text not null,
  damage_dice              text,
  insight                  text,
  item                     jsonb,
  spawns_boss_character_id uuid references characters(id) on delete set null,
  created_at               timestamptz not null default now()
);
create index if not exists idx_structure_outcomes_check on structure_outcomes(check_id);

-- Append-only resolution log — same role as combat_events: the authoritative
-- record of what happened, broadcast to every connected client via Realtime.
-- tier/narrative/damage_dealt/insight/item are denormalized copies of the
-- outcome that was hit (rather than requiring a join on structure_outcomes)
-- because a Realtime postgres_changes payload only ever contains the row's
-- own columns — a spectator client receiving the INSERT live needs the
-- narrative text to be right there on the row, same reasoning as
-- combat_events denormalizing hp/damage instead of joining map_tokens.
-- map_id is likewise denormalized (derivable via structure_id ->
-- map_structures.map_id) purely so the client can subscribe with
-- `filter: map_id=eq.<mapId>`, which postgres_changes requires to be a column
-- on the table itself — the same reason combat_events carries map_id.
create table if not exists structure_events (
  id             uuid primary key default gen_random_uuid(),
  map_id         uuid not null references game_maps(id) on delete cascade,
  structure_id   uuid not null references map_structures(id) on delete cascade,
  check_id       uuid not null references structure_checks(id) on delete cascade,
  character_id   uuid references characters(id) on delete set null,
  roll           integer not null,
  total          integer not null,
  outcome_id     uuid not null references structure_outcomes(id) on delete cascade,
  tier           text not null check (tier in ('crit_fail', 'fail', 'success', 'crit_success')),
  narrative      text not null,
  damage_dealt   integer,
  insight        text,
  item           jsonb,
  created_at     timestamptz not null default now()
);
create index if not exists idx_structure_events_map on structure_events(map_id);

alter table map_structures enable row level security;
alter table structure_checks enable row level security;
alter table structure_outcomes enable row level security;
alter table structure_events enable row level security;

-- Same reasoning as map_tokens/combat_events in 0003_map.sql: the anon-key
-- client only subscribes to Realtime, never queries directly, but with RLS
-- on and zero policies it would never receive change events either. Only
-- the two tables players watch live need a read policy; checks/outcomes are
-- DM-authored content edited exclusively through the service-role API.
create policy "Allow realtime read" on map_structures for select using (true);
create policy "Allow realtime read" on structure_events for select using (true);

alter publication supabase_realtime add table map_structures;
alter publication supabase_realtime add table structure_events;
