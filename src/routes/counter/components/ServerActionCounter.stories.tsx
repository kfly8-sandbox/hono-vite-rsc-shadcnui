import type { Meta, StoryObj } from '@storybook/react'
import { ServerActionCounter } from './ServerActionCounter'

const meta = {
  title: 'Routes/Counter/ServerActionCounter',
  component: ServerActionCounter,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ServerActionCounter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const LoadingState: Story = {
  parameters: {
    mockData: {
      loading: true,
    },
  },
}