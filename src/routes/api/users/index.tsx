import { Hono } from 'hono'

const app = new Hono().basePath('/api/users')

// Mock data - in a real app, this would come from a database
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
]

const route = app
  .get('/', (c) => {
    return c.json(users)
  })
  .get('/:id', (c) => {
    const id = c.req.param('id')
    const user = users.find((u) => u.id === Number(id))
    if (!user) {
      return c.json({ error: 'User not found' }, 404)
    }
    return c.json(user)
  })

export type AppType = typeof route
export default app
