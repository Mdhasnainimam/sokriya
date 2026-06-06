# SkoriyaTech — Static HTML/CSS/JS site

A self-contained, **no-build, no-backend** version of the SkoriyaTech marketing site.
Vanilla HTML + Tailwind (via CDN) + a small `site.js`. Drop it on any static host
(Netlify, Vercel, GitHub Pages, S3, Cloudflare Pages, Hostinger, cPanel…).

## What's inside
```
skoriyatech-static/
├── index.html        # Home — hero, services, process, featured project, industries, stats, CTA
├── services.html     # Detailed services + engagement models + process
├── industries.html   # 10 industries grid
├── projects.html     # 4 case studies
├── about.html        # Story, stats, principles, gallery
├── contact.html      # Contact form + map + all channels
└── assets/
    ├── styles.css    # Theme, animations, utility classes
    ├── site.js       # Navbar, footer, WhatsApp FAB, constellation, toasts, forms
    └── data.js       # Services / industries / projects / process content
```

## How to run locally
Just open `index.html` in a browser — it works directly from the file system.
For best results (and to keep `mailto:` happy) serve with any tiny static server:

```bash
# Python (built into most systems)
python3 -m http.server 8080
# then open http://localhost:8080
```

## What changed vs the React version
- **No backend.** The contact form opens the visitor's email client with the brief
  pre-filled (`mailto:info@skoriyatech.com`) AND stores the lead in `localStorage`
  so nothing is lost.
- The newsletter form stores subscribers in `localStorage` and shows a toast.
- **The AI Feasibility Assistant has been removed** — it requires a server-side
  LLM call (Emergent Universal Key) and cannot run in a pure static site.
- Everything else (visuals, animations, navigation, WhatsApp FAB, map, LinkedIn,
  phone numbers, address) is identical.

## Deploy
Any static host works. Examples:
- **Netlify / Vercel** — drag the folder into the dashboard.
- **GitHub Pages** — push to a repo, enable Pages on the branch.
- **Hostinger / cPanel** — upload via FTP into `public_html/`.

## Editing content
- Edit `assets/data.js` to change services, industries, projects, process steps.
- Edit page-level HTML for the long-form copy on each page.
- Edit `assets/site.js` to change phone, email, WhatsApp, LinkedIn, address.
- Edit `assets/styles.css` for theme tweaks (colors are at the top).

## Brand colors
- Background: `#050505`
- Gold (accent): `#D4AF37`
- Gold light (hover): `#F3E5AB`
- Fonts: Outfit (headings) · Manrope (body) · JetBrains Mono (labels)
