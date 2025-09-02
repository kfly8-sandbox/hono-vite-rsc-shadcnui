import app from './index'

describe('GET /api/status', () => {
  it('should return status ok with timestamp and version', async () => {
    const res = await app.request('/api/status')

    expect(res.status).toBe(200)

    const json = await res.json()
    expect(json).toHaveProperty('status', 'ok')
    expect(json).toHaveProperty('timestamp')
    expect(json).toHaveProperty('version', '1.0.0')
  })
})