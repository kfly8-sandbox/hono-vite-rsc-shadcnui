import type { Meta, StoryObj } from '@storybook/react'
import { Layout } from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Sample Page Content</h1>
          <p className="text-lg text-muted-foreground">
            This is an example of content wrapped in the Layout component.
          </p>
        </div>
      </div>
    ),
  },
}

