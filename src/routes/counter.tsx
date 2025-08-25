import { Hono } from 'hono'
import { Counter } from '@/components/counter'
import { AppFooter } from '@/components/AppFooter'
import { ArrowRight } from 'lucide-react'

const app = new Hono()

app.get('/counter', (c) => {
  return c.render(
    (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
          
          <div className="mb-8 space-y-4 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Interactive Counter
            </h1>
            <p className="text-lg text-muted-foreground">
              Click to increment and reach exciting milestones!
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl border rounded-lg p-8 text-center">
              <Counter />
            </div>
          </div>

          <AppFooter NextAppLink="/dashboard" NextAppText="Dashboard" />
        </div>
      </div>
    ),
    {
      title: 'Interactive Counter - Click and Count',
    }
  )
})

export default app