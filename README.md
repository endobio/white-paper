# EndoBio white paper

An Astro + MDX publishing system for EndoBio research papers. The repository builds to static HTML and deploys to GitHub Pages at `https://www.endobio.ai/white-paper/` (`https://endobio.ai/white-paper/` redirects there).

## Local development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

The production checks are:

```sh
npm run check
npm run build
```

## Authoring a paper

Add an `.mdx` file under `src/content/research/`. Every paper uses typed frontmatter:

```yaml
---
title: "Paper title"
description: "One-sentence summary."
authors:
  - "Author name"
date: 2026-09-02
version: "1.0"
status: "preprint" # draft, preprint, or published
featured: false
abstract: "The paper abstract."
---
```

Papers are automatically wrapped in `WhitepaperLayout`, which supplies the publication header, metadata, abstract, table of contents, reading layout, SEO metadata, responsive styles, and print/PDF styles. A `featured: true` paper appears at the site root. Non-draft papers are also published under `/research/<filename>/`.

The following components are available directly in MDX without imports:

- `<Callout title="…" tone="insight|evidence|caution">…</Callout>`
- `<Figure src="/figures/example.png" alt="…" caption="…" />`
- `<Citation label="1" href="#ref-1" />`
- `<Equation math={"..."} label="1" />`

Static figure files belong in `public/figures/`. Figure URLs beginning with `/` are automatically prefixed with the GitHub Pages base path.

## Deployment

The workflow in `.github/workflows/deploy.yml` checks out the repository, builds Astro, and deploys the static output on every push to `main`.

In the GitHub repository settings, select **Settings → Pages → Source: GitHub Actions**. Do not add a `CNAME` file to this project repository: `endobio.ai` is the custom domain of the `endobio.github.io` organization site, and GitHub exposes this project site beneath that domain at `/white-paper/`.
