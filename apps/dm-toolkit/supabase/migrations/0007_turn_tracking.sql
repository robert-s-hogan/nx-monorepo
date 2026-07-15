-- dm-toolkit: movement history + turn/initiative tracking, so the app
-- carries the "whose turn is it" bookkeeping instead of the DM. Run this
-- once in the Supabase SQL editor for the dm-toolkit project.

-- Movement history, same shape/reasoning as combat_events/structure_events
-- (0003_map.sql / 0004_structures.sql): one row per committed move.
create table if not exists movement_events (
  id         uuid primary key default gen_random_uuid(),
  map_id     uuid not null references game_maps(id) on delete cascade,
  token_id   uuid not null references map_tokens(id) on delete cascade,
  from_x     real not null,
  from_y     real not null,
  to_x       real not null,
  to_y       real not null,
  created_at timestamptz not null default now()
);
create index if not exists idx_movement_events_map on movement_events(map_id);

alter table movement_events enable row level security;
create policy "Allow realtime read" on movement_events for select using (true);
alter publication supabase_realtime add table movement_events;

-- Turn state lives on the map itself so it's Realtime-shared with every
-- connected client, same as token positions. turn_order is an ordered list
-- of map_tokens.id; current_turn_index points into it.
alter table game_maps add column if not exists turn_order uuid[] not null default '{}';
alter table game_maps add column if not exists current_turn_index integer not null default 0;
alter table game_maps add column if not exists round_number integer not null default 1;
alter table game_maps add column if not exists combat_active boolean not null default false;

-- game_maps wasn't previously in the realtime publication (only fetched via
-- direct query, never subscribed) — turn changes need to broadcast live to
-- every connected client, same reasoning map_tokens/combat_events already
-- got an explicit read policy for in 0003_map.sql.
create policy "Allow realtime read" on game_maps for select using (true);
alter publication supabase_realtime add table game_maps;

-- The rolled initiative total (1d20 + DEX mod) for whichever token is
-- currently seated in turn_order — kept on the token so the UI can show it
-- without re-deriving it from history.
alter table map_tokens add column if not exists initiative integer;
