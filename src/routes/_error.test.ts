import { Hono } from 'hono'
import onError from './_error'

// Mock console.error to suppress error output during tests
const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

const app = new Hono()
app.onError(onError)

app.get('/error-test', () => {
  throw new Error('Test error')
})

describe('Error Route', () => {
  it('should handle errors and return 500 status', async () => {
    const res = await app.request('/error-test')
    expect(res.status).toBe(500)

    // Verify that console.error was called (but output is suppressed)
    expect(consoleSpy).toHaveBeenCalled()
  })
})
