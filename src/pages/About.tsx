export function AboutPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About</h1>
      
      <div className="prose prose-lg">
        <p className="text-gray-700 mb-4">
          This is a demonstration of Hono framework with Vite RSC (React Server Components) 
          and shadcn/ui components.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Hono</strong> - Lightweight web framework</li>
          <li><strong>Vite RSC</strong> - React Server Components with Vite</li>
          <li><strong>shadcn/ui</strong> - Beautiful UI components</li>
          <li><strong>Tailwind CSS v4</strong> - Utility-first CSS framework</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Server-side rendering with React Server Components</li>
          <li>Client-side interactivity with React hydration</li>
          <li>Type-safe routing with Hono</li>
          <li>Modern development experience with Vite</li>
        </ul>
        
        <div className="mt-8">
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  )
}