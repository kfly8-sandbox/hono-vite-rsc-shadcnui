import { Hono } from 'hono'
import { About } from '@/components/About'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Info } from 'lucide-react'

const app = new Hono()

app.get('/about', (c) => {
  return c.render(
    (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </div>

          <About />
        </div>
      </div>
    ),
    {
      title: 'About - Modern Web Development Showcase',
    }
  )
})

export default app