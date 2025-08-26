import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  LayoutDashboard,
  CheckSquare,
  User,
  Github,
  MousePointerClick,
} from 'lucide-react'

import honoLogo from '@/assets/logos/hono.svg'
import viteLogo from '@/assets/logos/vite.svg'
import reactLogo from '@/assets/logos/react.svg'
import shadcnuiLogo from '@/assets/logos/shadcnui.svg'

const coreTechStack = [
  {
    name: "Hono",
    url: "https://hono.dev",
    logo: honoLogo
  },
  {
    name: "Vite",
    url: "https://vitejs.dev",
    logo: viteLogo
  },
  {
    name: "React",
    url: "https://react.dev",
    logo: reactLogo
  }
] as const

type CoreTech = (typeof coreTechStack)[number]

const uiStack = [
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    logo: shadcnuiLogo
  },
]

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
]

function CoreTechStackLogo({ tech }: { tech: CoreTech }) {
  return (
    <div className="flex items-center">
      <a
        href={tech.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-2 sm:p-4 rounded-2xl hover:bg-accent/30 transition-all duration-300 hover:scale-105"
        aria-label={tech.name}
      >
        <img
          src={tech.logo}
          alt={`${tech.name} logo`}
          className="h-18 w-18 sm:h-24 sm:w-24 object-contain"
        />
      </a>
    </div>
  )
}

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-16">
          {/* Core Tech Stack Logos */}
          <div className="space-y-12">
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              {coreTechStack.map((tech) => (
                <CoreTechStackLogo key={tech.name} tech={tech} />
              ))}
            </div>

            <div className="space-y-6">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-foreground max-w-4xl mx-auto leading-relaxed px-4">
                Modern tech stack trial with{' '}
                <a
                  href="https://react.dev/reference/rsc/server-components"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline decoration-2 underline-offset-4 hover:text-primary transition-colors whitespace-nowrap"
                >
                  React Server Components
                </a>
              </p>

              <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg text-muted-foreground">
                <span>Enhanced with</span>
                <a
                  href={uiStack[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-accent/50 hover:bg-accent transition-colors"
                  aria-label={uiStack[0].name}
                >
                  <img
                    src={uiStack[0].logo}
                    alt={`${uiStack[0].name} logo`}
                    className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                  />
                  <span className="font-medium text-xs sm:text-base">shadcn/ui</span>
                </a>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div>
            <Button size="lg" variant="outline" className="gap-3 h-12 px-8 text-base font-medium" asChild>
              <a href="https://github.com/kfly8-sandbox/hono-vite-rsc-shadcnui" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                View Source
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
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
    </div>
  )
}
