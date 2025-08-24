import { Hono } from 'hono'
import { TodoList } from '@/components/TodoList'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Sparkles } from 'lucide-react'

const app = new Hono()

app.get('/todos', (c) => {
  return c.render(
    (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </a>
            </Button>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
                Todo List
              </h1>
              <Badge variant="outline" className="mt-2">
                <Sparkles className="h-3 w-3 mr-1" />
                Powered by shadcn/ui
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A modern task management application built with React Server Components, 
              Hono, and shadcn/ui components. Stay organized and productive!
            </p>
          </div>

          <TodoList />

          <Card className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-dashed">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Pro Tips</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Press Enter to quickly add a new task</li>
                  <li>• Click checkbox to mark tasks as complete</li>
                  <li>• Filter tasks by status using the tabs</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">
                  Built with ❤️ using Hono + RSC
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    ),
    {
      title: 'Todo List - Modern Task Management',
    }
  )
})

export default app