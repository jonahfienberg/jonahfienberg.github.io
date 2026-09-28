# jonahfienberg.github.io

My portfolio: the projects I've built, why I built them and how they work.

Live at **https://jonahfienberg.github.io**

## Editing

Each project is a Markdown file in `src/content/projects/`. To add one, copy an existing
file, change the frontmatter and write the page. The fields it needs are defined in
`src/content.config.ts`.

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production build into dist/
```

Pushing to `main` builds and deploys the site through GitHub Actions
(`.github/workflows/deploy.yml`).

Built with [Astro](https://astro.build).
