-- dm-toolkit: structure investigation checks no longer roll against a DC —
-- resolution is now a flat 7-band table keyed off the natural d20 roll and
-- skill modifier (see lib/dice.ts's structureCheckBand), replacing the old
-- roll-vs-DC + margin-from-DC banding. dc is unused going forward. Run this
-- once in the Supabase SQL editor for the dm-toolkit project.
alter table structure_checks drop column if exists dc;
