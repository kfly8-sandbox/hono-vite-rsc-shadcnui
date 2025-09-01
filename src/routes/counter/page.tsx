import { ClientCounter } from '@/components/ClientCounter'
import { ServerActionCounter } from '@/components/ServerActionCounter'
import { AppFooter } from '@/components/AppFooter'
import { Suspense } from 'react'

export function CounterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-6xl">

        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Counter Comparison
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare client-side interactive counter with server-side action counter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Client Counter */}
          <div className="border rounded-lg p-8">
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Client-side counter</h3>
              </div>
              <ClientCounter />
              <div className="text-sm text-muted-foreground">
                Resets on page refresh
              </div>
            </div>
          </div>

          {/* Server Action Counter */}
          <div className="border rounded-lg p-8">
            <div className="space-y-6 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Server Action counter</h3>
              </div>
              <Suspense fallback={
                <div className="flex flex-col items-center space-y-4 p-4 sm:p-6">
                  <div className="text-4xl sm:text-6xl font-bold text-primary">
                    ...
                  </div>
                </div>
              }>
                <ServerActionCounter />
              </Suspense>
              <div className="text-sm text-muted-foreground">
                This counter persists on the server
              </div>
            </div>
          </div>
        </div>

        <AppFooter NextAppLink="/dashboard" NextAppText="Dashboard" />
      </div>
    </div>
  )
}