# Luma Edit MVP

English-language AI product-photo workflow for Etsy, Shopify, and Amazon sellers. The MVP is positioned around completing listing-image jobs, not being another general-purpose editor.

## Run locally

```powershell
npm install
npm run dev -- --port 3017
```

Visit `http://127.0.0.1:3017` when running on port 3017.

## Current product surface

- Upload, drag-and-drop, marketplace-specific prompt presets, simulated preview, comparison slider, and export.
- Task-focused SEO landing pages for removing product backgrounds, creating lifestyle product photos, and preparing Shopify images.
- Generated `sitemap.xml` and `robots.txt` routes for search indexing.
- Pricing pages for Starter ($9/40 credits), Creator ($19/150), and Studio ($39/400).
- Privacy and terms drafts, explicitly marked for legal review before public launch.
- Server-only `POST /api/edit` boundary validates edit requests. It deliberately refuses requests until `BFL_API_KEY` and a verified BFL Kontext provider adapter are configured.

## Before accepting real payments

1. Choose and configure an image provider (Replicate, fal.ai, or BFL) and implement the provider contract in `app/api/edit/route.ts`.
2. Add authenticated users, persistent credit balances, rate limits, and webhook-safe Stripe subscription handling.
3. Store uploads/results in private object storage with a documented expiry policy.
4. Obtain legal review for privacy, terms, refunds, acceptable use, and applicable US/EU privacy obligations.
