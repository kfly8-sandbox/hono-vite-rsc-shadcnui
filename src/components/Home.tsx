import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Counter } from '@/components/counter'
import {
  Rocket,
  Zap,
  Shield,
  Server,
  Palette,
  ArrowRight,
  LayoutDashboard,
  CheckSquare,
  User,
  Github,
} from 'lucide-react'

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "React Server Components",
    description: "Modern server-side rendering with React 19 and streaming support"
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Hono Framework",
    description: "Ultra-fast, lightweight web framework built for the edge"
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-500" />,
    title: "Vite Build Tool",
    description: "Lightning-fast build tool with hot module replacement and optimized bundling"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "shadcn/ui Components",
    description: "Beautiful, accessible components built with Radix UI and Tailwind CSS"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "TypeScript Ready",
    description: "Full TypeScript support with strict type checking"
  }
]

const navItems = [
  {
    href: "/dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Dashboard",
    description: "View analytics and system metrics",
    badge: "Analytics"
  },
  {
    href: "/todos",
    icon: <CheckSquare className="h-5 w-5" />,
    title: "Todo List",
    description: "Manage your tasks efficiently",
    badge: "Productivity"
  },
  {
    href: "/profile",
    icon: <User className="h-5 w-5" />,
    title: "Profile",
    description: "Manage your account settings",
    badge: "Account"
  },
]

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Rocket className="h-4 w-4" />
          Modern Web Development
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Welcome to Hono + Vite + RSC
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A modern full-stack application built with React Server Components,
            Hono framework, and beautiful shadcn/ui components.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="https://github.com/kfly8-sandbox/hono-vite-rsc-shadcnui" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View Source
            </a>
          </Button>
        </div>
      </div>

      {/* Interactive Counter */}
      <Card className="max-w-sm sm:max-w-md mx-auto">
        <CardContent className="flex justify-center pt-6">
          <Counter />
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="space-y-6">
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Built with Modern Technologies</h2>
          <p className="text-muted-foreground">
            Combining the best tools for performance, developer experience, and user interface
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`flex justify-center mb-4 ${feature.color || 'text-primary'}`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="space-y-6">
        <div className="text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Explore the Application</h2>
          <p className="text-muted-foreground">
            Discover different features and capabilities of this modern web application
          </p>
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
                    <Badge variant="secondary">{item.badge}</Badge>
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
    </div>
  )
}
