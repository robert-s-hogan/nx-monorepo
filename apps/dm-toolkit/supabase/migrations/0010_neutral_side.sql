-- dm-toolkit: adds a neutral faction alongside ally/enemy, for NPC tokens
-- that aren't fighting on either side (bystanders, merchants, etc). Run
-- this once in the Supabase SQL editor for the dm-toolkit project.

alter table map_tokens drop constraint if exists map_tokens_side_check;
alter table map_tokens add constraint map_tokens_side_check check (side in ('ally', 'enemy', 'neutral'));
