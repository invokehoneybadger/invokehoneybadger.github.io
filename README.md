# Invoke HoneyBadger — HBV (Coming Soon)

**Invoke HoneyBadger** is the origin project for *HoneyBadger Vanguard (HBV)* — red-team tooling, recon frameworks, and community resources.  
This repository contains the coming-soon landing page for `invokehoneybadger.com` and instructions to deploy via GitHub Pages.

## What’s in this repo
- `index.html` — Simple, static coming-soon landing page (responsive, neon HBV theme).
- `CNAME` — Custom domain file used by GitHub Pages (`invokehoneybadger.com`).
- `README.md` — This file.

## Quick deploy (recommended)
Option A — **GitHub Pages (user/site or repo pages)**:
1. Create a repository named: `invokehoneybadger.github.io` (or any repo and use Pages → branch settings).  
2. Add `index.html` and `CNAME` to the repo root and push.  
3. In Settings → Pages confirm the custom domain: `invokehoneybadger.com` (or GitHub may auto-detect `CNAME`).  
4. Configure DNS (see below).  
5. Wait a few minutes for DNS + HTTPS certificate provisioning, then visit `https://invokehoneybadger.com`.

Option B — **Netlify / Vercel**:
- Drag & drop build or connect repo; set custom domain to `invokehoneybadger.com`. They will provision HTTPS automatically.

## DNS (GoDaddy) — GitHub Pages A records (if using Apex/root)
Set these **A** records at your registrar for `invokehoneybadger.com` (no www):

185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

Then optionally create a `CNAME` record for `www` that points to `<your-github-username>.github.io` (or to `invokehoneybadger.github.io`).

## Email / Contact
For now, the page uses a `mailto:` contact. When ready, consider Google Workspace or ImprovMX (email forwarding) and add SPF/DKIM.

## Security & settings
- Enable **HTTPS** in GitHub Pages Settings once DNS is propagated.  
- Use WHOIS privacy, Domain Lock, and Auto-Renew on your registrar.  
- Protect your GitHub account with 2FA.

## License
This repo is a simple landing page. Use as you like. If you intend to open-source HBV tools later, add an appropriate license file (MIT, Apache-2.0, etc.).

---

Contact: `hi@invokehoneybadger.com`
