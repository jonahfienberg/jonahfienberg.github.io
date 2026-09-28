---
title: Intake
tagline: Log a meal by taking a photo of it.
summary: A calorie and protein tracker where an AI model estimates the meal from a photo or a sentence, and you confirm before anything is saved. It also tracks workouts, creatine and weekly weigh-ins, with charts for trends.
order: 2
year: "2026"
role: "Solo: design and engineering"
stack: [Next.js, TypeScript, Postgres, Google Gemini, Recharts, Tailwind]
theme:
  bg: "#0B1220"
  fg: "#e6ecf5"
  accent: "#3B82F6"
---

<!-- TODO(Jonah): rewrite this section in your own words. It's the part recruiters read most closely. -->

## Why I built it

The calorie trackers I tried turned every meal into a database search. I'd look for
"chicken burrito bowl", scroll past forty versions and give up by Wednesday. I wanted
logging to take one photo, and I wanted the other things I track every day (training,
creatine, weight) in the same place, not in three different apps.

## How it works

**Take a photo, or type a sentence.** The meal goes to Google Gemini, which lists each
food, estimates its portion and returns calories and protein for each item. Anything
you add in a note, like a brand or an amount, overrides what the model thinks it sees.

**Nothing is saved until you approve it.** The estimate comes back for review, and you can
edit it before it's saved. Each AI entry keeps the model's confidence and its full response,
so a strange number can be traced back to where it came from.

**The day and the trends live in one place.** The home screen shows today's totals against
your goals, a breakdown by meal and quick checks for workout and creatine. The history
page steps through past weeks, and the charts page shows calories, protein, training
split and weight over 7 days, 30 days or all time.

## Decisions worth noting

- **Free AI with a fallback.** Gemini's free tier is enough for personal logging.
  Free models are sometimes overloaded, so each request tries a lighter model first,
  falls back to a stronger one and retries before showing an error.
- **Works with any Postgres.** The app uses the standard `pg` driver and reads the
  connection string from any of the variable names hosting providers use, so the database
  can move to another host without code changes.
- **Photos never touch the database.** Only the estimate is stored.

## What's next

A public demo where each visitor gets their own sample data, and learning from my own
edits so estimates for meals I eat often get more accurate over time.
