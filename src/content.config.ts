import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    order: z.number(),
    year: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    // Leave empty until the public version is deployed; the page shows "demo coming soon".
    liveUrl: z.string().url().optional(),
    // Only shown once the repo is public.
    repoUrl: z.string().url().optional(),
    // Each project is framed in its own app's colours.
    theme: z.object({
      bg: z.string(),
      fg: z.string(),
      accent: z.string(),
    }),
  }),
});

export const collections = { projects };
