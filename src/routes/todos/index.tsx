import { Hono } from 'hono'
import { TodosPage } from './page'

const app = new Hono()

app.get('/todos', (c) => {
  return c.render(<TodosPage />,
    {
      title: 'Todo List - Modern Task Management',
    }
  )
})

export default app