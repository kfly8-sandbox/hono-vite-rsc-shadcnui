import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="container mx-auto p-8 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/">
          <Button>Go back home</Button>
        </a>
      </div>
    </div>
  )
}