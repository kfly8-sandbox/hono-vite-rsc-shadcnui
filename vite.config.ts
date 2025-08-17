import rsc from '@vitejs/plugin-rsc'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [
    rsc(),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },


  environments: {
    rsc: {
      build: {
        rollupOptions: {
          input: {
            index: './src/entries/entry.rsc.tsx',
            workers: './src/entries/entry.cluodflare-workers.tsx',
          },
        },
      },
    },

    ssr: {
      build: {
        rollupOptions: {
          input: {
            index: './src/entries/entry.ssr.tsx',
          },
        },
      },
    },

    client: {
      build: {
        rollupOptions: {
          input: {
            index: './src/entries/entry.browser.tsx',
          },
        },
      },
    }
  },
})
