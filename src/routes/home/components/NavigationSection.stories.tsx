import type { Meta, StoryObj } from '@storybook/react'
import { NavigationSection } from './NavigationSection'

const meta = {
  title: 'Routes/Home/NavigationSection',
  component: NavigationSection,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavigationSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}