import { Button } from '@/components/ui/button'

export function DashboardPage() {
  const stats = [
    { label: 'Total Users', value: '1,234' },
    { label: 'Active Sessions', value: '42' },
    { label: 'Server Uptime', value: '99.9%' },
    { label: 'API Calls', value: '8,765' },
  ]
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg shadow p-6 border">
            <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 border mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3">
          <li className="flex justify-between items-center py-2 border-b">
            <span>User login from Tokyo</span>
            <span className="text-sm text-gray-500">2 minutes ago</span>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <span>API endpoint accessed</span>
            <span className="text-sm text-gray-500">5 minutes ago</span>
          </li>
          <li className="flex justify-between items-center py-2 border-b">
            <span>Database backup completed</span>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </li>
        </ul>
      </div>
      
      <div className="flex gap-4">
        <Button>Refresh Data</Button>
        <Button variant="outline">Export Report</Button>
        <a href="/" className="ml-auto">
          <Button variant="ghost">← Back to Home</Button>
        </a>
      </div>
    </div>
  )
}