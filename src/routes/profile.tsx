import { Hono } from 'hono'
import { Profile } from '@/components/Profile'
import { Button } from '@/components/ui/button'
import { ArrowLeft, UserCircle } from 'lucide-react'

const app = new Hono()

app.get('/profile', (c) => {
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

          <div className="mb-8 space-y-2">
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <UserCircle className="h-10 w-10" />
              Profile
            </h1>
            <p className="text-lg text-muted-foreground">
              Manage your account settings and personal information
            </p>
          </div>

          <Profile />
        </div>
      </div>
    ),
    {
      title: 'Profile - User Account',
    }
  )
})

export default app