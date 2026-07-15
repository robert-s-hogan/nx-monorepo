-- dm-toolkit: a short generated flavor line for one-off enemy tokens (see
-- lib/rulesets/enemyGen.ts). Run this once in the Supabase SQL editor for
-- the dm-toolkit project.

alter table map_tokens add column if not exists flavor_text text;
