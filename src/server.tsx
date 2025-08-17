import { Hono } from 'hono'
import { rscRenderer } from './rsc-renderer'
import { Layout } from './layout'

import { HomePage } from './pages/Home'
import { AboutPage } from './pages/About'
import { DashboardPage } from './pages/Dashboard'
import { ProfilePage } from './pages/Profile'
import { TodoListPage } from './pages/TodoList'
import { NotFoundPage } from './pages/NotFound'

export const app = new Hono()

app.use(rscRenderer({ Layout }))

app.get('/', (c) => {
  return c.render(<HomePage />, {
    title: 'Home - Hono RSC App',
  })
})

app.get('/about', (c) => {
  return c.render(<AboutPage />, {
    title: 'About - Hono RSC App',
  })
})

app.get('/dashboard', (c) => {
  return c.render(<DashboardPage />, {
    title: 'Dashboard - Hono RSC App',
  })
})

app.get('/profile', (c) => {
  return c.render(<ProfilePage />, {
    title: 'Profile - Hono RSC App',
  })
})

app.get('/todos', (c) => {
  return c.render(<TodoListPage />, {
    title: 'Todo List - Hono RSC App',
  })
})

// API endpoints
app.get('/api/status', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  })
})

app.get('/api/users', (c) => {
  // Mock data - in a real app, this would come from a database
  return c.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ])
})

app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In a real app, you would process the contact form here
  return c.json({
    success: true,
    message: 'Contact form received',
    data: body,
  })
})

app.notFound((c) => {
  return c.render(<NotFoundPage />, {
    title: '404 - Page Not Found',
  })
})

export default app
