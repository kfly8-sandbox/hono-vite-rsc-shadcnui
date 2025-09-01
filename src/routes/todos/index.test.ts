import app from './index'

describe('GET /todos', () => {
  it('should return 200 status', async () => {
    const res = await app.request('/todos')
    expect(res.status).toBe(200)
  })
})