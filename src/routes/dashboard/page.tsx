import { Dashboard } from '@/components/Dashboard'
import { AppFooter } from '@/components/AppFooter'
import { LayoutDashboard } from 'lucide-react'

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

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

        <AppFooter NextAppLink="/todos" NextAppText="Todo List" />
      </div>
    </div>
  )
}