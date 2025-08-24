import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Zap,
  Server,
  Palette,
  Code2,
  Rocket,
  Shield,
  Globe,
  Github,
  Heart,
  Sparkles,
  Target,
  Layers,
} from 'lucide-react'

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React 19", description: "Latest React with Server Components", icon: <Code2 className="h-5 w-5" />, color: "bg-blue-100 text-blue-800" },
      { name: "TypeScript", description: "Type-safe development", icon: <Shield className="h-5 w-5" />, color: "bg-indigo-100 text-indigo-800" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework", icon: <Palette className="h-5 w-5" />, color: "bg-cyan-100 text-cyan-800" },
      { name: "shadcn/ui", description: "Beautiful component library", icon: <Sparkles className="h-5 w-5" />, color: "bg-purple-100 text-purple-800" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Hono", description: "Ultra-fast web framework", icon: <Zap className="h-5 w-5" />, color: "bg-orange-100 text-orange-800" },
      { name: "Vite", description: "Lightning fast build tool", icon: <Rocket className="h-5 w-5" />, color: "bg-green-100 text-green-800" },
      { name: "React Server Components", description: "Server-side rendering", icon: <Server className="h-5 w-5" />, color: "bg-red-100 text-red-800" },
      { name: "Cloudflare Workers", description: "Edge computing platform", icon: <Globe className="h-5 w-5" />, color: "bg-yellow-100 text-yellow-800" }
    ]
  }
]

export function About() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Target className="h-4 w-4" />
          About This Project
        </div>

        <h1 className="text-4xl font-bold text-foreground">
          Modern Web Development Showcase
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A demonstration of cutting-edge web technologies, featuring React Server Components,
          Hono framework, and beautiful shadcn/ui components.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
          <p className="text-muted-foreground">
            Carefully selected technologies that work seamlessly together
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {technologies.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {category.category === 'Frontend' ? (
                    <Code2 className="h-5 w-5" />
                  ) : (
                    <Server className="h-5 w-5" />
                  )}
                  {category.category}
                </CardTitle>
                <CardDescription>
                  {category.category === 'Frontend'
                    ? 'Client-side technologies for user interface and experience'
                    : 'Server-side technologies for performance and scalability'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((tech) => (
                  <div key={tech.name} className="flex items-start gap-3">
                    <div className="text-muted-foreground mt-0.5">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{tech.name}</span>
                        <Badge variant="secondary" className={tech.color}>
                          Latest
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="font-medium">Built with passion for modern web development</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            This project demonstrates the power of React Server Components combined with modern tooling
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/kfly8-sandbox/hono-vite-rsc-shadcnui" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              View Source Code
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
