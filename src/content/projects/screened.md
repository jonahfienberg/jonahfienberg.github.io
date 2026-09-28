---
title: Screened
tagline: Rank every film you watch by comparing it to the ones you've already seen.
summary: A film diary that gets its scores from head-to-head comparisons, then uses those scores to suggest what to watch next.
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

## Why I built it

I was frustrated with the current apps on the market for rating and organizing movies. Inspired by the popular restaurant review app Beli, I wanted to create a system where each film was ranked in comparison to movies I'd already watched, creating a more accurate and fun rating system. I also wanted to be able to utilize my rankings and preferences to identify new movies that I am more likely to enjoy.

## How it works

**You compare instead of rating.** After a film, you say whether you loved it, thought it was
fine, or didn't like it. Then Screened asks a few quick questions, using a binary comparison to narrow down the "real" ranking of that movie.

**No scores until there's enough to compare.** Scores appear after the user enters 10 films, giving the algorithm enough to work with.

**Suggestions come from your taste as a whole.** Films you scored above 7.5 build a
profile of your strongest genres, and each genre gets a shelf of well-regarded films you
haven't logged. The shelves update as you rank more.

## What's next

Sharing a ranked list with friends, and adding a "sync" feature that compares people's tastes to pick a film
everyone will like.
