# Hono + Vite + React Server Components + shadcn/ui

Modern tech stack trial with React Server Components

## Features

- 🔥 **[Hono](https://hono.dev)**
- ⚙️  **[Vite](https://vite.dev/)**
- ⚡ **React Server Components** - powered by [@vitejs/plugin-rsc](https://www.npmjs.com/package/@vitejs/plugin-rsc)
- 🎨 **[shadcn/ui](https://ui.shadcn.com/)**

## Getting Started

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun run dev
```

### Build

```bash
# Build for production
bun run build
```

### Preview

```bash
# Preview production build
bun run preview
```

## Project Structure

```
src/
├── components/
│   └── ui/          # shadcn/ui components
├── routes/          # Route components (file-based routing)
│   ├── *.test.ts    # Test files (co-located with routes)
│   ├── _404.tsx     # 404 Not Found page
│   ├── _error.tsx   # Error page
│   ├── api.tsx
│   ├── counter.tsx
│   ├── dashboard.tsx
│   ├── home.tsx
│   ├── profile.tsx
│   └── todos.tsx
├── rsc/             # RSC entry points
│   ├── entry.browser.tsx # Client entry point
│   ├── entry.rsc.tsx     # RSC entry point
│   ├── entry.ssr.tsx     # SSR entry point
│   └── rsc-renderer.tsx  # RSC renderer
├── cloudflare-workers.tsx # Cloudflare Workers entry
├── layout.tsx       # Main layout component
├── server.ts        # Server entry point with auto-routing
└── style.css        # Global styles with Tailwind
```

