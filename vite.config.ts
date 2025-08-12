import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  ssr: {
    external: ['react', 'react-dom']
  },
  plugins: [cloudflare(), ssrPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
