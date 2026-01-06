# On YouTube Page – Acharya Prashant (Clone)

Frontend implementation of the **“On YouTube”** page from the Acharya Prashant website.

## Tech Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Features
- Responsive UI (mobile & desktop)
- Language, category, order, and year filters
- Horizontal topic navigation with scroll controls
- Video grid with thumbnail, duration, views, time, and tags
- “No results found” state with filter reset
- Filter state persists on hard reload via URL params
- Videos remain non-clickable (as required)

## APIs Used
- Categories: `https://acharyaprashant.org/api/v2/uni/category`
- Videos: `https://acharyaprashant.org/api/v2/uni/yt`

## Run Locally
```bash
npm install
npm run dev