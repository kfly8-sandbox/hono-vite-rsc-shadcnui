import { Hono } from 'hono'
import { Home } from '@/components/Home'

const app = new Hono()

app.get('/', (c) => {
  return c.render(
    (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl">
          <Home />
        </div>
      </div>
    ),
    {
      title: 'Home - Modern Web Development with Hono + RSC',
    }
  )
})

export default app
