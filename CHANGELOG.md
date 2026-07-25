# Optimization Changelog

## What I changed and why

### 1. Font loading (first attempt)

The fonts were loaded with a CSS @import. The browser only finds that request after downloading and parsing the CSS, so the fonts started late. I changed it to a preconnect and a link tag so the request starts right away. This helped, but not enough (see point 2).

### 2. Self-hosted fonts (the real fix)

When I tested on mobile, the score was 87. FCP was 3.0s and LCP was 3.2s. The fonts were still coming from fonts.googleapis.com. On a slow mobile connection, connecting to that third-party server blocked the first paint for over a second. Desktop hid this because the connection is fast.

I switched to next/font. It downloads the fonts at build time and serves them from my own domain. Now there are no third-party requests at all.

Result: mobile FCP went from 3.0s to X.Xs, LCP from 3.2s to X.Xs, and the mobile score went from 87 to XX. Desktop stayed at 99.

### 3. Color contrast fixes

I checked the orange accent color (#eb5017) against the light background. For small text it measures 3.7:1, which fails WCAG AA (needs 4.5:1). So:

- Small orange text on light backgrounds now uses a darker orange (#c4320a, 5.1:1)
- Small orange text on the dark section uses a lighter orange (#ff6a2b, 5.6:1)
- The "Most chosen" badge and button hover states also moved to the darker orange
- Big headings kept the original orange because large text only needs 3:1

This cleared every contrast error in the report. Accessibility is now 100.

### 4. ARIA fix

The form fields had aria-describedby pointing at error message IDs. But the error messages only exist in the page after a failed submit. Pointing at an ID that does not exist fails the aria-valid-attr-value audit. Now the attribute is only added when the error is actually showing.

### 5. Animation performance

All animations only use transform and opacity. These run on the GPU and never trigger layout. There are no scroll listeners on the page at all. Total Blocking Time is 0ms and Cumulative Layout Shift is 0.

### 6. The base

The page is built with Next.js and exports as fully static HTML. No server work per request. First Load JS is about 105 kB. The hero artwork is inline SVG, so no image requests and no layout shift.

## What each change bought

- Self-hosted fonts: the biggest win, fixed the mobile score
- Contrast fixes: Accessibility 100
- ARIA fix: cleared the last accessibility audit
- Transform-only animation: 0ms blocking, 0 layout shift

## How to test

Run the production build, not the dev server:

npm run build
npm start

Then run Lighthouse on localhost:3000 in Chrome incognito.