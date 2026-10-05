# Cloudflare migration

Worker: `olivias-sifnos-story`. Account: `3ae246eded35e99220b461c2ca5ff158`.
The migration uses the Vercel production snapshot `601fa3b36daf4be23f53e04aeb33f84cdd0281af`.
The existing Vercel production project and custom domain configuration remain in place.

This Worker is protected by the Cloudflare Access application `olivias-sifnos-story - migration preview`.
Access must remain attached to the Worker before enabling workers.dev or deploying versions.
Version preview URLs are disabled. Team members use email verification.

The Cloudflare build trigger watches `codex/cloudflare-migration-20261005`.
Build and deploy commands are in package.json; install uses its committed lockfile.
The Cloudflare build environment preserves Vercel's Node version `22.x`.
There are 0 Vercel environment entries for this project.
Environment values belong in Cloudflare build variables and runtime secrets, never in this repository.

Validation: local production build and deployment packaging passed; the private
workers.dev homepage returned HTTP 200 with a temporary verification credential,
and unauthenticated requests redirected to Cloudflare Access.
Form submission, booking, payment and email delivery were not exercised.
