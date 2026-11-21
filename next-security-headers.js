// Baseline security headers for every Next app in the repo, returned from each
// app's next.config.js `headers()`. Vercel already sends HSTS.
//
// No script/style CSP: the apps talk to Supabase, use inline styles, and
// the-hogans serves standalone HTML pages from public/, so a strict policy
// would need per-app tuning. `frame-ancestors` alone stops other sites from
// framing these pages (clickjacking), which is the part worth having.
function securityHeaders({ microphone = false } = {}) {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
        {
          key: 'Permissions-Policy',
          // Flashcards records audio for cards, so the-hogans opts in.
          value: `camera=(), geolocation=(), payment=(), usb=(), microphone=${
            microphone ? '(self)' : '()'
          }`,
        },
      ],
    },
  ];
}

module.exports = { securityHeaders };
