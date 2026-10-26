# nx-monorepo

Robert Hogan's personal apps in one Nx workspace (Next.js, React, TypeScript).
Each app in `apps/` deploys to its own Vercel project, and shared code lives in
`libs/`.

## Manual cleanup

These steps happen outside the repo, so a pull request can't do them. Check one
off after you've done it.

### neuro-fit (removed from the repo; replaced by the-hogans `/home-gym`)

- [ ] **Vercel:** delete the `nx-neuro-fit` project (Settings → Advanced →
      Delete Project). It only had `nx-neuro-fit.vercel.app`, no custom domain.
      Deleting it also removes its env vars (`NEURO_FIT_TURSO_DATABASE_URL`,
      `NEURO_FIT_TURSO_AUTH_TOKEN`) and stops the "Vercel – nx-neuro-fit" check
      on every pull request.
- [ ] **Turso:** export anything you want to keep, then delete the database.
      ```sh
      turso auth login
      turso db list                 # find the neuro-fit database
      turso db shell <name> .dump > neuro-fit-backup.sql   # optional backup
      turso db destroy <name>
      ```
- [ ] **Local:** remove `NEURO_FIT_TURSO_*` from your `.env.local` if they're
      there.
