# victorfiltchev_ai — Personal Portfolio + Journal Site

## Purpose
Personal brand site for Victor: AI/software developer portfolio + a journal (blog, no email sending) with links out to Victor's key projects. Hosted on Vercel.

## Stack
- Next.js (App Router), TypeScript, MDX for journal content (files in repo, no DB)
- Tailwind for styling
- Deployed to Vercel

## Visual style
Dark, technical/AI-lab aesthetic: dark background, monospace accents for headings/labels, subtle grid/terminal texture, single restrained accent color (cyan/lime — adjustable later).

## Routes
- `/` — Hero (name + "Solo founder & builder mastering agentic AI workflows"), featured links grid (GitHub/engramkit, Korrin, Orvexis IV), 2-3 latest journal posts preview
- `/journal` — list of all posts (title, date, excerpt)
- `/journal/[slug]` — MDX post render
- `/about` — bio: solo founder + AI-agentic-workflow builder framing

## Featured links (homepage)
- GitHub: https://github.com/Victorchatter/engramkit (engramkit repo, pinned)
- Korrin: https://korrin.eu
- Orvexis IV: https://orvexisiv.com
- BGEstate Intelligence — explicitly **excluded for now**, add later when requested

## Content
Two starter journal posts (written as part of this build, real-feeling, not placeholder lorem ipsum):
1. On building with agentic AI workflows (personal angle, ties to Victor's actual work style)
2. An AI-news/opinion style post

## Nav
Header: Home / Journal / About + GitHub icon link. Footer: same links + copyright.

## Out of scope (v1)
- Email subscription / newsletter sending (Resend, Buttondown, etc.)
- Database-backed content (Supabase) — MDX files only
- BGEstate Intelligence link

## Testing / done criteria
- `npm run build` passes clean
- Manual click-through of all nav links, homepage featured links, and journal post links locally
