# nx-monorepo

Robert Hogan's personal apps in one Nx workspace (Next.js, React, TypeScript).
Each app in `apps/` deploys to its own Vercel project, and shared code lives in
`libs/`.

## Manual steps

These steps happen outside the repo, so a pull request can't do them. Check one
off after you've done it.

### the-hogans: login for `/dom`

Everything under `/dom` needs a login (folders are listed in
`apps/the-hogans/lib/private-folders.json`). Until these are set, `/dom` pages
show "Sign-in isn't set up for this site yet."

- [ ] **Vercel → `nx-the-hogans` → Settings → Environment Variables**
      (Production and Preview). Paste values without wrapping quotes.
  - [ ] `NEXT_PUBLIC_AUTH_SUPABASE_URL`: same value as the other gated apps
  - [ ] `NEXT_PUBLIC_AUTH_SUPABASE_ANON_KEY`: same value as the other gated
        apps
  - [x] `NEXT_PUBLIC_AUTH_FAMILY_EMAILS`: your email (comma-separate to add
        family). Set for Production only so far.
  - [x] `NEXT_PUBLIC_AUTH_LIMITED_EMAILS`: Dom's email. Set for Production
        only so far.
- [ ] **Supabase → Authentication → URL Configuration → Redirect URLs:** add
      `https://www.the-hogans.com/**`. Without it, the sign-in email link sends
      people to the wrong site.
- [ ] **Redeploy** the-hogans so the new variables are built in, then sign in
      at `/dom` with each email.

### swapi-cards (moved to the-hogans `/swapi`)

- [ ] **Vercel:** delete the `nx-swapi-cards` project right after this merges
      (Settings → Advanced → Delete Project). Until then its `main` build fails,
      because the app is gone. It only served
      `swapi-cards-nx-monorepo.vercel.app`, with no custom domain or env vars.

## Done

- **neuro-fit** (2026-10-25): removed from the repo and replaced by the-hogans
  `/home-gym`. Its Vercel project, Turso database, tokens and local env vars
  are all deleted.
