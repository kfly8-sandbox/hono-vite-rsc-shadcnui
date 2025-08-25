import app from './counter'

describe('GET /counter', () => {
  it('should return 200 status', async () => {
    const res = await app.request('/counter')
    expect(res.status).toBe(200)
  })
})
