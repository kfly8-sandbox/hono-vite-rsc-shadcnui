import app from './index'

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