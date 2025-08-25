import { Button } from '@/components/ui/button'
import {
  HomeIcon,
  ArrowRight,
} from 'lucide-react'

type Props = {
  NextAppLink: string
  NextAppText: string
}

export function AppFooter({ NextAppLink, NextAppText }: Props) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center gap-4">
          <Button size="sm" variant="ghost" asChild>
            <a href="/" className="flex items-center gap-2">
              <HomeIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Home</span>
            </a>
          </Button>
          
          <div className="h-4 w-px bg-border" />
          
          <Button size="sm" variant="ghost" asChild>
            <a href={NextAppLink} className="flex items-center gap-2">
              <span className="text-muted-foreground">Next:</span>
              {NextAppText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
