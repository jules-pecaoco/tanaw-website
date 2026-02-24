# Tanaw Landing Page — Modular Structure

## File Tree

```
src/
├── App.jsx                          # Root component — layout orchestrator & shared state
│
├── constants/
│   └── data.js                      # All static data: features, articles, nav links, app config
│
├── hooks/
│   └── useIntersectionObserver.js   # Reusable scroll-reveal hook
│
├── components/
│   ├── Header.jsx          # Fixed top nav bar (scroll-aware transparency)
│   ├── Hero.jsx            # Full-width hero with CTA buttons
│   ├── Features.jsx        # 6-card feature grid
│   ├── Showcase.jsx        # Video + highlight checklist
│   ├── Articles.jsx        # Filterable article card grid (NEW)
│   ├── Download.jsx        # Android / iOS download cards
│   ├── Footer.jsx          # Copyright, socials, links
│   ├── Notification.jsx    # Toast notification (top-right)
│   └── BackToTop.jsx       # Scroll-to-top FAB button
│
└── assets/
    └── video/
        └── tanaw-advertisement.mp4
```

## What Changed

### Modularization

- Each visual section is its own component with a single responsibility.
- `useIntersectionObserver` hook is extracted and reused across all animated sections.
- All static data (features, articles, highlights, nav links, app version/links) lives in `constants/data.js` — update once, reflects everywhere.
- Shared state (download notification, scroll position) stays in `App.jsx` and is passed down as props.

### New: Articles Section

- Located between Showcase and Download.
- 6 pre-written articles covering Safety Tips, Climate Awareness, Community, and Technology.
- **Category filter tabs** let users filter by topic.
- Cards include: thumbnail image, category badge, title, excerpt, date, read time, author, and "Read article" CTA.
- Fully animated with the same scroll-reveal pattern as other sections.
- To add a new article, append an entry to the `ARTICLES` array in `constants/data.js`.

## Adding Articles

Edit `src/constants/data.js` and add to the `ARTICLES` array:

```js
{
  id: 7,
  category: "Safety Tips",          // Used for filter tabs
  categoryColor: "bg-red-500",      // Tailwind color class for the badge
  title: "Your Article Title",
  excerpt: "Short description shown on the card (1–2 sentences).",
  date: "March 1, 2026",
  readTime: "4 min read",
  image: "https://your-image-url.com/photo.jpg",
  author: "Author Name",
}
```

New categories are automatically picked up by the filter tab list.
