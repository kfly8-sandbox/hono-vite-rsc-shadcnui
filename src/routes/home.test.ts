import app from './home'

describe('GET /', () => {
  it('should return 200 status', async () => {
    const res = await app.request('/')
    expect(res.status).toBe(200)
  })
})
