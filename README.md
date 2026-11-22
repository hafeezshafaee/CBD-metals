# CBD Scrap Car Removal Website

A React, TypeScript and Vite website for CBD Scrap Car Removal in Perth, Western Australia.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## SEO and deployment notes

- Page titles, meta descriptions, canonical URLs, Open Graph metadata and page-specific keyword themes are managed by `src/components/Seo.tsx`.
- The homepage includes LocalBusiness structured data for the Perth service area.
- `public/robots.txt` permits search-engine crawling.
- `public/_redirects` and `vercel.json` provide SPA route fallbacks for common static hosts.
- Add a sitemap with the final live domain, then submit it in Google Search Console.
- Configure the production domain in Google Search Console and verify the canonical URLs after deployment.
- The quote forms currently open the visitor's default email app with the form details filled in. Connect a real form service or backend before relying on the forms for lead capture.

## Business details to verify before launch

Confirm the live website domain, business name spelling, phone number, email address, operating hours, service suburbs, payment terms, and any claims about free towing or same-day collection. Do not publish unverified prices, review counts, staff biographies, licences, or service guarantees.
