import builder from '@/builder'

// API status endpoint
builder.get('/api/status', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  })
})

// API users endpoint
builder.get('/api/users', (c) => {
  // Mock data - in a real app, this would come from a database
  return c.json([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  ])
})

// API contact endpoint
builder.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In a real app, you would process the contact form here
  return c.json({
    success: true,
    message: 'Contact form received',
    data: body,
  })
})
