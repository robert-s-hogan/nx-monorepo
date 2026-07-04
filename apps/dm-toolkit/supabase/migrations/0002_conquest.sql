-- dm-toolkit Phase 1: Conquest-mode tables (session_mode column on campaigns
-- already exists from 0001_init.sql). Run this once in the Supabase SQL editor
-- for the dm-toolkit project.

create table if not exists encounters (
  id                uuid primary key default gen_random_uuid(),
  campaign_id       uuid not null references campaigns(id) on delete cascade,
  difficulty        text not null,
  encounter_xp      integer not null,
  objective         text,
  map_terrain_type  text,
  time_of_day       text,
  weather           text,
  created_at        timestamptz not null default now()
);
create index if not exists idx_encounters_campaign on encounters(campaign_id);

create table if not exists rest_states (
  campaign_id         uuid primary key references campaigns(id) on delete cascade,
  short_rests_taken   boolean[] not null default '{false,false}',
  long_rest_needed    boolean not null default false
);

alter table encounters enable row level security;
alter table rest_states enable row level security;
