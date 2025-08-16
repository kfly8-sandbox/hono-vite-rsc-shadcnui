import { Button } from '@/components/ui/button'

export function ProfilePage() {
  // This would normally come from a database or API
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Developer',
    joinDate: 'January 2024',
    bio: 'Full-stack developer passionate about React and TypeScript.',
    skills: ['React', 'TypeScript', 'Node.js', 'Hono', 'Tailwind CSS'],
  }
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      
      <div className="bg-white rounded-lg shadow p-6 border mb-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-1">{user.email}</p>
            <p className="text-gray-600 mb-4">{user.role} • Joined {user.joinDate}</p>
            <p className="text-gray-700 mb-4">{user.bio}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 border mb-6">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {user.skills.map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 border">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive updates about your account</p>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Privacy Settings</p>
              <p className="text-sm text-gray-600">Control who can see your profile</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Account Security</p>
              <p className="text-sm text-gray-600">Two-factor authentication and password</p>
            </div>
            <Button variant="outline" size="sm">Update</Button>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
      </div>
    </div>
  )
}