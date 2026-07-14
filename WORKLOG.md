# Worklog

> Change log for this project: what was done, what changed, what decisions were made.
> Newest entries on top. This is the source of truth for changes (for me and for cross-checking in other tools).
> Entry format:
> ## YYYY-MM-DD
> - What was done (features, fixes, refactors) — be specific
> - Files/areas touched
> - Decisions and why (if any)
> - What's left / next step
> - Release/version, if bumped

## 2026-07-14
- Bumped displayed age from 34 to 35 (birthday is 8 January 1991, correct as of today's date) and footer copyright year range from "2018 - 2025" to "2018 - 2026"
- Files touched: `nextjs-portfolio/src/app/en/page.tsx`, `nextjs-portfolio/src/app/ru/page.tsx`, `nextjs-portfolio/src/app/en/offer/page.tsx`, `nextjs-portfolio/src/app/ru/offer/page.tsx`
- Decision: initial pass edited `nextjs-portfolio/messages/en.json` / `ru.json` (`ageValue`, `footer.copyright`), but those files are not wired into the pages (no `useTranslations`/`getTranslations` usage found) — the live site pulls age/copyright from hardcoded JSX in the page files above, so the JSON edit had no visible effect. Left the JSON changes in place (harmless, now internally consistent) but the real fix is in the JSX.
- Set up this worklog (`WORKLOG.md`) and added a standing rule to maintain it in `CLAUDE.md`
- Next step: none pending; worth flagging to the user that `messages/*.json` currently look unused dead content for this data

## (entries will appear below)
