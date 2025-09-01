import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  LayoutDashboard,
  CheckSquare,
  User,
  MousePointerClick,
} from 'lucide-react'


const navItems = [
  {
    href: "/counter",
    icon: <MousePointerClick className="h-5 w-5" />,
    title: "Counter",
    description: "Click to increment with milestone celebrations",
  },
  {
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Dashboard",
    description: "View analytics and system metrics",
  },
  {
    href: "/todos",
    icon: <CheckSquare className="h-5 w-5" />,
    title: "Todo List",
    description: "Manage your tasks efficiently",
  },
  {
    href: "/profile",
    icon: <User className="h-5 w-5" />,
    title: "Profile",
    description: "Manage your account settings",
  },
] as const

export function NavigationSection() {

  return (
    <div className="space-y-6">
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore Examples</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {navItems.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <a href={item.href} className="block">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">
                      {item.icon}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </div>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}
