import app from './index'

describe('GET /api/users', () => {
  it('should return array of users', async () => {
    const res = await app.request('/api/users')

    expect(res.status).toBe(200)

    const json = await res.json()
    expect(Array.isArray(json)).toBe(true)
    expect(json).toHaveLength(3)

    const firstUser = (json as any)[0]
    expect(firstUser).toHaveProperty('id', 1)
    expect(firstUser).toHaveProperty('name', 'John Doe')
    expect(firstUser).toHaveProperty('email', 'john@example.com')
  })
})

describe('GET /api/users/:id', () => {
  it('should return specific user by id', async () => {
    const res = await app.request('/api/users/1')

    expect(res.status).toBe(200)

    const json = await res.json()
    expect(json).toHaveProperty('id', 1)
    expect(json).toHaveProperty('name', 'John Doe')
    expect(json).toHaveProperty('email', 'john@example.com')
  })

  it('should return 404 for non-existent user', async () => {
    const res = await app.request('/api/users/999')

    expect(res.status).toBe(404)

    const json = await res.json()
    expect(json).toHaveProperty('error', 'User not found')
  })

  it('should handle invalid user id', async () => {
    const res = await app.request('/api/users/invalid')

    expect(res.status).toBe(404)

    const json = await res.json()
    expect(json).toHaveProperty('error', 'User not found')
  })
})