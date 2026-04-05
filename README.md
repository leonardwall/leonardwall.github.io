# Leonard Wall site refresh

A modern Astro + Tailwind rebuild for `leonardwall.github.io`.

## Positioning

This version shifts the site from an older resume-style GitHub Pages site to a sharper executive brand platform focused on:

- security and observability convergence
- resilient platform strategy
- thought leadership and insights
- selected projects and speaking

## Stack

- Astro
- Tailwind CSS
- Markdown content collections
- GitHub Actions for GitHub Pages deployment

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

This repo includes a GitHub Actions workflow for Pages deployment.

### If you keep using `leonardwall/leonardwall.github.io`

1. Replace the current site contents with this codebase.
2. Rename the default branch to `main` if needed, or update the workflow to use `master`.
3. In GitHub, enable Pages and set the source to **GitHub Actions**.

### Recommended content updates before launch

Replace placeholders for:

- LinkedIn URL
- public contact email
- featured insights content
- project blurbs
- speaking history
- headshot / social share image

## Suggested next edits

- add a real headshot and custom Open Graph image
- migrate your best LinkedIn or Splunk Perspectives articles into `src/content/insights`
- add your actual speaking and media history
- connect the homepage CTAs to your top 3 flagship pieces


