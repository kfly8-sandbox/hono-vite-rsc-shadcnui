import { Button } from '@/components/ui/button'

import honoLogo from '@/assets/logos/hono.svg'
import viteLogo from '@/assets/logos/vite.svg'
import reactLogo from '@/assets/logos/react.svg'
import shadcnuiLogo from '@/assets/logos/shadcnui.svg'

import {
  Github,
} from 'lucide-react'

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

const uiStack = [
  {
    name: "shadcn/ui",
    url: "https://ui.shadcn.com",
    logo: shadcnuiLogo
  },
] as const

type CoreTech = (typeof coreTechStack)[number]

export function HeroSection() {
  return (
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
  )
}

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

