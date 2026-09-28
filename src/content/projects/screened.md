---
title: Screened
tagline: Rank every film you watch by comparing it to the ones you've already seen.
summary: A film diary that gets its scores from head-to-head comparisons, not stars you pick on the spot, then uses those scores to suggest what to watch next.
order: 1
year: "2026"
role: "Solo: design and engineering"
liveUrl: "https://screened-films.vercel.app"
stack: [React, TypeScript, Vite, IndexedDB (Dexie), PWA, TMDB API]
theme:
  bg: "#0d0d0d"
  fg: "#f2f0ea"
  accent: "#c98a46"
---

<!-- TODO(Jonah): rewrite this section in your own words. It's the part recruiters read most closely. -->

## Why I built it

Star ratings have always felt broken to me. I'd give a film four stars in March, give a
different one four stars in June, and have no idea which I actually liked more. Beli gets
this right for restaurants: you don't pick a number, you compare the new place with ones
you've already been to, and the ranking produces the scores. I wanted that for films.

## How it works

**You compare instead of rating.** After a film, you say whether you loved it, thought it was
fine, or didn't like it. Then Screened asks a few quick questions: *was it better or worse
than this one?* Each answer halves the range of places it could go (a binary search),
so even with a hundred films you answer about seven questions.

**Scores come from where a film ends up in the ranking.** Each tier has a score range: *loved* runs 7.0–10, *fine*
4.0–6.9, *didn't like* 0–3.9. A film's score is set by where it sits within its tier, so
scores stay consistent with each other as the list grows.

**No scores until there's enough to compare.** The first ten films are only put in order.
Scores appear together once there are enough films for them to mean something.

**Suggestions come from your taste as a whole.** Films you scored above 7.5 build a
profile of your strongest genres, and each genre gets a shelf of well-regarded films you
haven't logged. The shelves update as you rank more.

## Decisions worth noting

- **Your data stays on your device.** Everything lives in the browser's IndexedDB, so the app
  works offline and installs to a phone's home screen. There's no account and no server
  holding your data.
- **Backups are optional.** A snapshot can be saved to a private GitHub Gist, so a
  cleared browser doesn't cost you your list.
- **Settings are stored twice.** Safari can clear localStorage and IndexedDB separately,
  so settings are saved in both and whichever survives restores the other.

## What's next

Sharing a ranked list with friends, and comparing two people's tastes to pick a film
you'll both like.
