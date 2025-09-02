import { Hono } from 'hono'

const app = new Hono()

const route = app.get('/api/status', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  })
})

export type AppType = typeof route
export default app
