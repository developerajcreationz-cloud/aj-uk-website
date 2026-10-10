# Contributing

## Branches

- `main` is production and auto-deploys to Hostinger. Do not push broken builds to it.
- Create a branch per change: `feat/<topic>`, `fix/<topic>`, `content/<topic>`, `docs/<topic>`, `chore/<topic>`.
- Open a pull request into `main`. CI must pass.

## Commits

Use short, imperative Conventional Commit style:

```
feat: add Shopify migration guide
fix: correct canonical on /work
content: update SEO pricing ranges
docs: add blog topic briefs
chore: bump dependencies
```

## Before you push

```bash
npm run format   # Prettier
npm run check    # lint + typecheck + build
```

## Pull requests

Fill in the PR template. For any new or changed page confirm: unique title and description, one H1, no UK/US in headings, sitemap entry, and no secrets.

## Secrets

Never commit `.env*` files (only `.env.example`). Add real values in Hostinger's environment variables.
