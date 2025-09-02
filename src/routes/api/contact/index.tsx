import { Hono } from 'hono'

const app = new Hono()

const route = app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In a real app, you would process the contact form here
  return c.json({
    success: true,
    message: 'Contact form received',
    data: body,
  })
})

export type AppType = typeof route
export default app
