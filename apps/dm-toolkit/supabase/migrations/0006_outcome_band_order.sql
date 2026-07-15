-- dm-toolkit: graduated structure-check outcomes. Ranks outcomes within the
-- same (check_id, tier) from worst (0) to best, so resolution can pick a
-- specific variant deterministically by how far the roll landed from the
-- DC, instead of choosing randomly among same-tier variants. Existing rows
-- default to 0 ("the only variant") — no behavior change for checks that
-- still author just one outcome per tier. Run this once in the Supabase SQL
-- editor for the dm-toolkit project.

alter table structure_outcomes add column if not exists band_order integer not null default 0;
