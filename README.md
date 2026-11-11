# nx-monorepo

Robert Hogan's personal apps in one Nx workspace (Next.js, React, TypeScript).
Each app in `apps/` deploys to its own Vercel project, and shared code lives in
`libs/`.

## Manual steps

These steps happen outside the repo, so a pull request can't do them. Check one
off after you've done it.

### the-hogans: login for `/dom`

Everything under `/dom` needs a login (folders are listed in
`apps/the-hogans/lib/private-folders.json`). Set up 2026-10-26; see Done.

- [ ] Have Dom sign in at `https://www.the-hogans.com/dom` with his email.
- [ ] Optional: tick **Preview** on the four auth variables
      (`NEXT_PUBLIC_AUTH_SUPABASE_URL`, `NEXT_PUBLIC_AUTH_SUPABASE_ANON_KEY`,
      `AUTH_FAMILY_EMAILS`, `AUTH_LIMITED_EMAILS`) in Vercel → `nx-the-hogans`,
      so sign-in also works on pull-request preview builds. They're
      Production-only now.

### radtech-tracker (moved to the-hogans `/dom/radtech`)

- [ ] **Before merging:** Vercel → `nx-the-hogans` → Settings → Environment
      Variables → add these two, ticking **Sensitive** and both
      **Production** and **Preview**. Copy the values from your `.env.local`
      (same names), without quotes.
  - `RADTECH_TRACKER_TURSO_DATABASE_URL`
  - `RADTECH_TRACKER_TURSO_AUTH_TOKEN`
- [ ] **After it deploys:** sign in at `https://www.the-hogans.com/dom/radtech`
      and check the plan shows (5 terms, 3 courses tracked).
- [ ] **Then:** delete the `nx-radtech-tracker` Vercel project (Settings →
      Advanced → Delete Project). Until then its `main` build fails, because
      the app is gone. Tell Dom the new link.
- [ ] Optional, later: the tracker now reads one shared row (`shared:dom`) in
      the `progress` table. The old per-email row is still there as a backup
      and can be deleted once you're happy.

## Done

- **Auth allowlist server-only** (2026-11-11): `NEXT_PUBLIC_AUTH_FAMILY_EMAILS`
  / `NEXT_PUBLIC_AUTH_LIMITED_EMAILS` renamed to `AUTH_FAMILY_EMAILS` /
  `AUTH_LIMITED_EMAILS` on all five sign-in apps' Vercel projects, so the
  email lists are no longer built into browser code. The client gets its role
  from each app's `/api/auth/me`.
- **the-hogans login** (2026-10-26): `NEXT_PUBLIC_AUTH_SUPABASE_URL`,
  `NEXT_PUBLIC_AUTH_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_AUTH_FAMILY_EMAILS` and
  `NEXT_PUBLIC_AUTH_LIMITED_EMAILS` set on `nx-the-hogans` (Production), and
  `https://www.the-hogans.com/**` added to Supabase's Redirect URLs. The
  Supabase URL and anon key are public config, not secrets: `NEXT_PUBLIC_*`
  values are built into the browser code. (The email lists were later made
  server-only, see above.)
- **swapi-cards** (2026-10-26): moved to the-hogans `/swapi`; the
  `nx-swapi-cards` Vercel project is deleted.
- **neuro-fit** (2026-10-25): removed from the repo and replaced by the-hogans
  `/home-gym`. Its Vercel project, Turso database, tokens and local env vars
  are all deleted.
