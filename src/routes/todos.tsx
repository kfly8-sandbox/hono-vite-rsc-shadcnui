import { Hono } from 'hono'
import { TodoList } from '@/components/TodoList'

const app = new Hono()

app.get('/todos', (c) => {
  return c.render(
    (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <div className="mb-8">
              <div className="mb-4">
                <a href="/" className="text-blue-600 hover:underline text-sm">
                  ← Home
                </a>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Todo List
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your tasks with shadcn/ui components
              </p>
            </div>
            <TodoList />
          </div>
        </div>
      </div>
    ),
    {
      title: 'Todo List - Hono RSC App',
    }
  )
})

export default app
