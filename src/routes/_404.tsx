import { Hono } from 'hono';

const app = new Hono()

app.notFound((c) => {
  return c.render(
    (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <a href="/" className="text-blue-600 hover:underline">
          Go back home
        </a>
      </div>
    ),
    {
      title: '404 - Page Not Found',
    }
  )
})

export default app
