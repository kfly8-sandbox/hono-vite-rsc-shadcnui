import { Hono } from 'hono'

const app = new Hono()

app.get('/dashboard', (c) => {
  return c.render(
    (
      <div className="container mx-auto p-8">
        <div className="mb-6">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← Home
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
            <p className="text-3xl font-bold text-green-600">89</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Server Status</h2>
            <p className="text-3xl font-bold text-purple-600">OK</p>
          </div>
        </div>
      </div>
    ),
    {
      title: 'Dashboard - Hono RSC App',
    }
  )
})

export default app
