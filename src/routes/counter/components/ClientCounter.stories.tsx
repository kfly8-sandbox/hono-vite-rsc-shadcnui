import type { Meta, StoryObj } from '@storybook/react'
import { ClientCounter } from './ClientCounter'

const meta = {
  title: 'Components/ClientCounter',
  component: ClientCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ClientCounter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}