import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Suspense } from 'react'

// Simple in-memory store for server counter (in production, use database)
let serverCount = 0

async function incrementServerCounter() {
  "use server"
  serverCount += 1
  return serverCount
}

async function getServerCount() {
  "use server"
  return serverCount
}

async function CounterContent() {
  const currentCount = await getServerCount()

  return (
    <>
      {/* Counter Display */}
      <div className="relative">
        <div className="text-4xl sm:text-6xl font-bold transition-all duration-400 text-primary scale-100">
          {currentCount}
        </div>
      </div>

      {/* Increment Button */}
      <form action={incrementServerCounter}>
        <Button
          type="submit"
          size="lg"
          className="h-12 w-12 sm:h-16 sm:w-16 rounded-full transition-all duration-200 text-lg sm:text-xl font-bold touch-manipulation bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 hover:scale-105 active:scale-95 shadow-lg"
        >
          <Plus className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      </form>
    </>
  )
}

export function ServerActionCounter() {
  return (
    <div className="flex flex-col items-center space-y-4 p-4 sm:p-6 relative">
      <Suspense fallback={
        <div className="animate-pulse">
          <div className="text-4xl sm:text-6xl font-bold text-muted-foreground">
            Loading...
          </div>
        </div>
      }>
        <CounterContent />
      </Suspense>
    </div>
  )
}
