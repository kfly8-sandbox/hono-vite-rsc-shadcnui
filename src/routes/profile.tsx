import { Hono } from 'hono'

const app = new Hono()

app.get('/profile', (c) => {
  return c.render(
    (
      <div className="container mx-auto p-8">
        <div className="mb-6">
          <a href="/" className="text-blue-600 hover:underline text-sm">
            ← Home
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow max-w-md">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="font-semibold">Role:</span> Administrator
            </div>
            <div>
              <span className="font-semibold">Joined:</span> January 2024
            </div>
            <div>
              <span className="font-semibold">Last Login:</span> Today
            </div>
          </div>
        </div>
      </div>
    ),
    {
      title: 'Profile - Hono RSC App',
    }
  )
})

export default app
