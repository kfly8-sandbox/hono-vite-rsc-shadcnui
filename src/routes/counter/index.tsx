import { Hono } from 'hono'
import { CounterPage } from './page'

const app = new Hono()

app.on(['POST', 'GET'], '/counter', (c) => {
  return c.render(<CounterPage />,
    {
      title: 'Counter Comparison - Interactive vs Server Actions',
    }
  )
})

export default app