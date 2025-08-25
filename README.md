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

Visit http://localhost:5173 to see the application.

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
│   ├── AppFooter.tsx # Fixed footer navigation
│   ├── counter.tsx  # Interactive counter component
│   ├── Dashboard.tsx # Dashboard component
│   ├── Home.tsx     # Home page component
│   ├── Profile.tsx  # Profile page component
│   └── TodoList.tsx # Todo list component
├── entries/         # Entry points for different environments
│   ├── entry.browser.tsx
│   ├── entry.cloudflare-workers.tsx
│   ├── entry.rsc.tsx
│   └── entry.ssr.tsx
├── routes/          # Route components (file-based routing)
│   ├── _404.tsx     # 404 Not Found page
│   ├── _error.tsx   # Error page
│   ├── api.tsx      # API endpoints
│   ├── counter.tsx  # Counter page
│   ├── dashboard.tsx # Dashboard page
│   ├── home.tsx     # Home page
│   ├── profile.tsx  # Profile page
│   └── todos.tsx    # Todo List page
├── lib/
│   └── utils.ts     # Utility functions
├── layout.tsx       # Main layout component
├── rsc-renderer.tsx # RSC renderer configuration
├── server.ts        # Server entry point with auto-routing
└── style.css        # Global styles with Tailwind
```

