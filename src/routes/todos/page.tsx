import { TodoList } from './components/TodoList'
import { AppFooter } from '@/components/AppFooter'

export function TodosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-4xl">

        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Todo List
            </h1>
          </div>
        </div>

        <TodoList />

        <AppFooter NextAppLink="/profile" NextAppText="Profile" />
      </div>
    </div>
  )
}