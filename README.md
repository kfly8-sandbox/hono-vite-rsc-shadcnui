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

Visit http://localhost:5175 to see the application.

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
├── assets/          # Static assets
│   └── logos/       # Logo images
│       ├── hono.svg
│       ├── react.svg
│       ├── shadcnui.svg
│       └── vite.svg
├── components/
│   ├── ui/          # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── input.tsx
│   │   ├── progress.tsx
│   │   ├── separator.tsx
│   │   └── tabs.tsx
│   ├── AppFooter.tsx         # Fixed footer navigation
│   ├── ClientCounter.tsx     # Client-side interactive counter
│   ├── Dashboard.tsx         # Dashboard component
│   ├── Home.tsx             # Home page component
│   ├── Profile.tsx          # Profile page component
│   ├── ServerActionCounter.tsx # Server action counter
│   └── TodoList.tsx         # Todo list component
├── lib/
│   └── utils.ts     # Utility functions
├── routes/          # Route components (file-based routing)
│   ├── *.test.ts    # Test files (co-located with routes)
│   ├── _404.tsx     # 404 Not Found page
│   ├── _error.tsx   # Error page
│   ├── api.tsx      # API endpoints
│   ├── counter.tsx  # Counter comparison page
│   ├── dashboard.tsx # Dashboard page
│   ├── home.tsx     # Home page
│   ├── profile.tsx  # Profile page
│   └── todos.tsx    # Todo List page
├── rsc/             # RSC entry points
│   ├── entry.browser.tsx # Client entry point
│   ├── entry.rsc.tsx    # RSC entry point
│   ├── entry.ssr.tsx    # SSR entry point
│   └── rsc-renderer.tsx # RSC renderer
├── test/            # Test setup
│   └── setup.ts
├── cloudflare-workers.tsx # Cloudflare Workers entry
├── layout.tsx       # Main layout component
├── rsc-renderer.tsx # RSC renderer configuration
├── server.ts        # Server entry point with auto-routing
└── style.css        # Global styles with Tailwind
```

