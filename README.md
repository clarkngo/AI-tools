# AI Tools Directory

A searchable, filterable directory of AI tools, built as a single-page React app. Each tool has a summary card and an in-depth tutorial covering what it is, common use cases, how to get started, and practical tips — helping students, teachers, researchers, developers, entrepreneurs, first responders, and business professionals find the right AI tool for their work.

Live site: https://clarkngo.github.io/AI-tools/

## Key Components

The site consists of:
- A searchable, taggable grid of AI tool cards (`src/components/ToolGrid.jsx`, `ToolCard.jsx`)
- Audience and category filter bars for narrowing the list (`AudienceBar.jsx`, `CategoryBar.jsx`)
- A detail modal with a full tutorial (what it is, use cases, getting started, tips) for each tool (`Modal.jsx`, `src/tutorials/`)
- Favorites, persisted in `localStorage`, with a one-click "Favorites" quick filter
- Light/dark theme toggle, persisted in `localStorage` and synced to system preference on first visit
- A "Copy link" action that shares the current search/filter view via URL
- Keyboard support (`/` focuses search) and an accessible, focus-trapping modal

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- Plain CSS (`src/App.css`), no UI framework
- [vite-plugin-singlefile](https://github.com/richardtallent/vite-plugin-singlefile) to inline the build into one `dist/index.html`
- [ESLint](https://eslint.org/) for linting

## Getting Started

```bash
npm install
npm run dev
```

This starts a local dev server (default: http://localhost:5173).

### Other scripts

```bash
npm run build    # Production build to dist/
npm run preview  # Preview the production build locally
npm run lint      # Run ESLint
```

## Adding a New Tool

To add a tool to the directory:

1. Add an entry to the `tools` array in [`src/data.js`](src/data.js) (name, URL, description, tags, audience, emoji).
2. Create a tutorial module in [`src/tutorials/`](src/tutorials/) exporting `whatIs`, `useCases`, `gettingStarted`, and `tips`, and import/wire it into `data.js`.
3. Add a line to [`CHANGELOG.md`](CHANGELOG.md) describing the addition.

See [`GEMINI.md`](GEMINI.md) for the full step-by-step workflow used when adding tools with an AI assistant.

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via [`.github/workflows/`](.github/workflows/): it runs `npm run build` and publishes the contents of `dist/`.

## License

Code is licensed under the [MIT License](LICENSE).
