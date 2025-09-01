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

describe('POST /api/contact', () => {
  it('should accept contact form data and return success response', async () => {
    const contactData = {
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message'
    }

    const req = new Request('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    })

    const res = await app.request(req)

    expect(res.status).toBe(200)

    const json = await res.json()
    expect(json).toHaveProperty('success', true)
    expect(json).toHaveProperty('message', 'Contact form received')
    expect(json).toHaveProperty('data')
    expect((json as any).data).toEqual(contactData)
  })

  it('should handle empty request body', async () => {
    const req = new Request('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })

    const res = await app.request(req)

    expect(res.status).toBe(200)

    const json = await res.json()
    expect(json).toHaveProperty('success', true)
    expect(json).toHaveProperty('data', {})
  })
})