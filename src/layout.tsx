import { Link, ViteClient } from 'vite-ssr-components/react'
import React from 'react'
import type { Props } from './rsc-renderer'

declare module './rsc-renderer' {
  interface Props {
    title?: string
  }
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>{title ?? "hono-vite-rsc-shadcnui" }</title>
        { !import.meta.env.PROD && <ViteClient /> }
        { !import.meta.env.PROD && <Link href="/src/style.css" rel="stylesheet" /> }
      </head>
      <body>{children}</body>
    </html>
  )
}
