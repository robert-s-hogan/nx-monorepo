-- dm-toolkit: a lightweight generated "story seed" per map — a theme, a
-- one-line hook, and a flat pool of clue fragments (see
-- lib/rulesets/storyGen.ts) that structure/NPC generation can later draw
-- from, so a failed investigation can hand back a real clue instead of
-- empty flavor text. Nullable since maps created before this feature exists
-- simply have no story. Run this once in the Supabase SQL editor for the
-- dm-toolkit project.
alter table game_maps add column if not exists story jsonb;
