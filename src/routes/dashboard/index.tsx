import { Hono } from 'hono'
import { DashboardPage } from './page'

const app = new Hono()

app.get('/dashboard', (c) => {
  return c.render(<DashboardPage />,
    {
      title: 'Dashboard - Analytics & Metrics',
    }
  )
})

export default app