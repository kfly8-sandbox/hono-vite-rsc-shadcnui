import { Hono } from 'hono'
import { ProfilePage } from './page'

const app = new Hono()

app.get('/profile', (c) => {
  return c.render(<ProfilePage />,
    {
      title: 'Profile - User Account',
    }
  )
})

export default app