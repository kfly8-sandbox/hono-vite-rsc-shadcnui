import builder from '@/builder'

builder.get('/about', (c) => {
  return c.render(
    (
      <div className="container mx-auto p-8">
        <div className="mb-6">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← Home
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            This is a modern web application built with cutting-edge technologies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>React Server Components for optimal performance</li>
            <li>Hono as a lightweight web framework</li>
            <li>Vite for fast development and building</li>
            <li>Tailwind CSS for styling</li>
            <li>Deployable to Cloudflare Workers</li>
          </ul>
        </div>
      </div>
    ),
    {
      title: 'About - Hono RSC App',
    }
  )
})

