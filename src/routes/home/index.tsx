import { Hono } from 'hono'
import { HomePage } from './page'

const app = new Hono()

app.get('/', (c) => {
  return c.render(<HomePage />,
    {
      title: 'Home - Modern Web Development with Hono + Vite + React Server Components',
    }
  )
})

export default app
