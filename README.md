# NorthPeak Digital

A one-page agency site. Next.js 15, Tailwind CSS 4, JavaScript.

## 🌐 Live Demo
- https://northpeakdigitall.netlify.app/

## Run it

```
npm install
npm run dev
```

Production:

```
npm run build
npm start
```

## Structure

```
app/            layout, page, global styles
components/     one component per section, shared primitives in ui.js
lib/            all content data in constants.js
```

Every section takes its content as a prop. Defaults come from `lib/constants.js`. Edit copy there.

```

## AI usage

The task allows AI. Here is exactly where I used it.

- Content. The copy in lib/constants.js came from AI drafts. Services, testimonials, stats, pricing tiers. I edited and approved the final wording.
- Code. I used Claude as a pair programmer. It generated component scaffolding and the Tailwind classes. I set the structure, reviewed every file, and decided what shipped.
- Optimization. I deployed and measured with PageSpeed myself. Mobile came back at 87. AI helped diagnose the font bottleneck and write the next/font fix. I redeployed and verified the new score.

## Notes

Lighthouse targets and the optimization log are in `CHANGELOG.md`. Run audits against the production build, not the dev server.
