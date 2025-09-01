import { HeroSection } from './components/HeroSection'
import { NavigationSection } from './components/NavigationSection'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl space-y-12">
        <HeroSection />
        <NavigationSection />
      </div>
    </div>
  )
}
