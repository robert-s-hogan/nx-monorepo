-- dm-toolkit: backs the read-only preview link (/map?session=<id>) — lets
-- an anonymous visitor look up which map a session currently has active,
-- without needing the family-only /session page to set it in client state.
-- Run this once in the Supabase SQL editor for the dm-toolkit project.

alter table sessions add column if not exists active_map_id uuid references game_maps(id) on delete set null;

-- sessions wasn't previously in the realtime publication (fetched directly,
-- never subscribed) — a share-link viewer needs to find out live when the
-- DM switches maps, same reasoning game_maps got this in 0007_turn_tracking.sql.
create policy "Allow realtime read" on sessions for select using (true);
alter publication supabase_realtime add table sessions;
