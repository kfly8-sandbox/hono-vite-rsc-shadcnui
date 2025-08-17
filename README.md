# Hono + Vite + React Server Components + shadcn/ui

A modern web application built with Hono, Vite, React Server Components, and shadcn/ui components, deployable to Cloudflare Workers.

## Features

- ⚡ **React Server Components** - Server-side rendering with streaming support
- 🎨 **shadcn/ui** - Beautiful, accessible UI components built with Radix UI and Tailwind CSS
- 🚀 **Hono** - Lightweight, ultrafast web framework
- ⚙️ **Vite** - Lightning fast build tool with HMR
- ☁️ **Cloudflare Workers** - Deploy globally on the edge
- 🎯 **TypeScript** - Full type safety
- 🌊 **Tailwind CSS v4** - Modern utility-first CSS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Cloudflare account (for deployment)

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start development server
bun run dev
# or
npm run dev
```

Visit http://localhost:5173 to see the application.

### Build

```bash
# Build for production
bun run build
# or
npm run build
```

### Preview

```bash
# Preview production build
bun run preview
# or
npm run preview
```

### Cloudflare Workers Development

```bash
# Run with Wrangler dev server
bun run cf-preview
# or
npm run cf-preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn/ui components
│   │   ├── button.tsx
│   │   └── checkbox.tsx
│   └── counter.tsx  # Interactive counter component
├── entries/         # Entry points for different environments
│   ├── entry.browser.tsx
│   ├── entry.cloudflare-workers.tsx
│   ├── entry.rsc.tsx
│   └── entry.ssr.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── TodoList.tsx # shadcn/ui showcase
│   └── NotFound.tsx
├── lib/
│   └── utils.ts     # Utility functions
├── layout.tsx       # Main layout component
├── rsc-renderer.tsx # RSC renderer configuration
├── server.tsx       # Hono server setup and routes
└── style.css        # Global styles with Tailwind
```

## Routes

- `/` - Home page with navigation
- `/about` - About page
- `/dashboard` - Dashboard page
- `/profile` - Profile page
- `/todos` - Interactive Todo List with shadcn/ui components
- `/api/status` - API status endpoint
- `/api/users` - Sample users API
- `/api/contact` - Contact form API

## Technologies

- **[Hono](https://hono.dev/)** - Web framework
- **[Vite](https://vitejs.dev/)** - Build tool
- **[React Server Components](https://react.dev/reference/rsc/server-components)** - Server-side React
- **[shadcn/ui](https://ui.shadcn.com/)** - UI component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Edge computing platform

## Deployment

### Deploy to Cloudflare Workers

```bash
# Deploy to Cloudflare Workers
bun run deploy
# or
npm run deploy
```

### Type Generation for Cloudflare Bindings

```bash
# Generate TypeScript types for Cloudflare bindings
bun run cf-typegen
# or
npm run cf-typegen
```

Then use the generated types in your Hono app:

```ts
// src/server.tsx
import { Hono } from 'hono'

const app = new Hono<{ Bindings: CloudflareBindings }>()
```

## Configuration

### Vite Configuration

The `vite.config.ts` file contains environment-specific build configurations for:
- RSC (React Server Components)
- SSR (Server-Side Rendering)
- Client (Browser)

### Wrangler Configuration

The `wrangler.jsonc` file configures Cloudflare Workers deployment settings.

## Notes

- The project uses React 19 with experimental RSC features
- NODE_ENV configuration is required for proper React builds (see vite.config.ts comments)
- Some warnings about side effects may appear during Cloudflare Workers preview - these can be safely ignored

