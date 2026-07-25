# NorthPeak Digital

A one-page agency site. Next.js 15, Tailwind CSS 4, JavaScript.

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

## Deploy

Push to a public GitHub repo:

```
git init
git add .
git commit -m "NorthPeak Digital one-page site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/northpeak-digital.git
git push -u origin main
```

Deploy on Vercel: import the repo at vercel.com/new. Framework preset is detected as Next.js. No config needed. The build is fully static.

Alternative via CLI:

```
npm i -g vercel
vercel --prod
```

## Notes

Lighthouse targets and the optimization log are in `CHANGELOG.md`. Run audits against the production build, not the dev server.
