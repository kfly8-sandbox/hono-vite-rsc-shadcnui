import { Hono } from 'hono'
import notFound from './_404'

const app = new Hono()
app.notFound(notFound)

describe('404 Route', () => {
  it('should handle requests to _404 app', async () => {
    const res = await app.request('/any-route')
    expect(res.status).toBe(404)
  })

  it('should return HTML content for 404', async () => {
    const res = await app.request('/')
    expect(res.headers.get('content-type')).toContain('text/html')
  })
})
