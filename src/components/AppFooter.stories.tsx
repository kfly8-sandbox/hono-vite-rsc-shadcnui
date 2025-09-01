import type { Meta, StoryObj } from '@storybook/react'
import { AppFooter } from './AppFooter'

const meta = {
  title: 'Components/AppFooter',
  component: AppFooter,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    NextAppLink: {
      control: 'text',
      description: 'The link to the next app page',
    },
    NextAppText: {
      control: 'text',
      description: 'The text for the next app link',
    },
  },
} satisfies Meta<typeof AppFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    NextAppLink: '/dashboard',
    NextAppText: 'Dashboard',
  },
}

