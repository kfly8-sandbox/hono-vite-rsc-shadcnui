import app from '.'

describe('GET /dashboard', () => {
  it('should return 200 status', async () => {
    const res = await app.request('/dashboard')
    expect(res.status).toBe(200)
  })
})
