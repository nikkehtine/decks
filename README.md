# Decks

Simple web presentations with React, Vite and Tailwind!

## Motivation

**Decks** is a boilerplate for quickly building web slideshows with a code-first approach, for developers and technical people. Similar to shadcn ui, everything comes prebuilt but fully customizable - you have complete access to the underlying code to style and extend it however you want.

Built on React, the framework gives you the power to embed custom interactive components directly into your slides. Combined with Tailwind CSS and DaisyUI, you get a comprehensive component library out of the box while maintaining full creative control.

Everything is bundled with Vite into a static site ready for free deployment on GitHub Pages or any hosting platform of your choice.

## Getting Started

### Prerequisites

- **Node.js** 20+ (ideally 24+)
- **pnpm** (optional but recommended)
  - this project targets **pnpm**, but **npm**, **yarn**, **bun** & others should also work

### Installation

```bash
git clone https://github.com/nikkehtine/decks
cd decks
pnpm install
```

Alternatively you can fork the repository and work on that

```bash
git clone <your-fork-url>
cd <your-cloned-directory>
pnpm install
```

### Development

```bash
pnpm dev
```

This starts a local development server. Open your browser and navigate to the provided URL (usually `localhost:5173`).

### Build

```bash
pnpm build
```

Your static site will be generated in the `dist/` directory, ready for deployment.

## Deployment

Deploy the `dist/` folder to GitHub Pages, Vercel, Netlify, or any static hosting service.

## License

MIT
