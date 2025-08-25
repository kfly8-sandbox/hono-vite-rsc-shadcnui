import app from './profile'

describe('GET /profile', () => {
  it('should return 200 status', async () => {
    const res = await app.request('/profile')
    expect(res.status).toBe(200)
  })
})
