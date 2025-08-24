import { Hono } from 'hono'
import { Dashboard } from '@/components/Dashboard'
import { Button } from '@/components/ui/button'
import { ArrowLeft, LayoutDashboard } from 'lucide-react'

const app = new Hono()

app.get('/dashboard', (c) => {
  return c.render(
    (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </div>

          <div className="mb-8 space-y-2">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <LayoutDashboard className="h-10 w-10" />
              Dashboard
            </h1>
            <p className="text-lg text-muted-foreground">
              Monitor your application metrics and performance in real-time
            </p>
          </div>

          <Dashboard />
        </div>
      </div>
    ),
    {
      title: 'Dashboard - Analytics & Metrics',
    }
  )
})

export default app