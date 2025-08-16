import { Counter } from '@/components/counter'
import { Checkbox } from '@/components/ui/checkbox'

export function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold underline mb-8">Welcome to Hono + Vite + RSC!</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Interactive Counter</h2>
          <Counter />
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">UI Components</h2>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </section>
        
        <nav className="pt-6 border-t">
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="text-blue-600 hover:underline">About</a></li>
            <li><a href="/dashboard" className="text-blue-600 hover:underline">Dashboard</a></li>
            <li><a href="/profile" className="text-blue-600 hover:underline">Profile</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}