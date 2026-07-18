-- dm-toolkit: ad-hoc skill checks that aren't tied to a physical Lego
-- structure (see 0004_structures.sql) — "make a Perception check right
-- now" rather than something pre-authored on the table. Unlike structure
-- checks there's no reusable check/outcome definition to author ahead of
-- time (nothing here gets reused session to session), so this is a single
-- append-only event log, same shape/reasoning as movement_events/
-- combat_events. Run this once in the Supabase SQL editor for the
-- dm-toolkit project.
create table if not exists general_check_events (
  id           uuid primary key default gen_random_uuid(),
  map_id       uuid not null references game_maps(id) on delete cascade,
  character_id uuid references characters(id) on delete set null,
  skill        text not null,
  dc           integer not null,
  roll         integer not null,
  total        integer not null,
  tier         text not null check (tier in ('crit_fail', 'fail', 'success', 'crit_success')),
  created_at   timestamptz not null default now()
);
create index if not exists idx_general_check_events_map on general_check_events(map_id);

alter table general_check_events enable row level security;
create policy "Allow realtime read" on general_check_events for select using (true);
alter publication supabase_realtime add table general_check_events;
