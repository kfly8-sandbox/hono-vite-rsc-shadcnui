import { reactRenderer } from '@hono/react-renderer'
import { Link, ViteClient } from 'vite-ssr-components/react'

export const renderer = reactRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
})
