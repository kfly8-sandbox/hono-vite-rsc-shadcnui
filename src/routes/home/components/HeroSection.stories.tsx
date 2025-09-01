import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection } from './HeroSection'

const meta = {
  title: 'Routes/Home/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeroSection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}