import type { Meta, StoryObj } from '@storybook/react'
import { CounterPage } from './page'

const meta = {
  title: 'Routes/Counter',
  component: CounterPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CounterPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}