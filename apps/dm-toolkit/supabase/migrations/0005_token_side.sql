-- dm-toolkit Phase 4: which side a token is fighting on. Needed because the
-- same reusable NPC/monster character (e.g. "Goblin", reused across sessions
-- since there are only ~15-20 physical miniatures) can be a teammate in one
-- encounter and an enemy in the next — that's a property of the token placed
-- on THIS map, not a fixed property of the character record. Run this once
-- in the Supabase SQL editor for the dm-toolkit project.

alter table map_tokens add column if not exists side text;

-- Backfill matching the historical implicit behavior (character_id present
-- was always rendered ally-green, absent was always rendered enemy-red).
update map_tokens set side = case when character_id is not null then 'ally' else 'enemy' end
where side is null;

alter table map_tokens alter column side set not null;
alter table map_tokens alter column side set default 'enemy';
alter table map_tokens add constraint map_tokens_side_check check (side in ('ally', 'enemy'));
