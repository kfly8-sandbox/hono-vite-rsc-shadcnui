import type { Meta, StoryObj } from '@storybook/react'
import { DashboardPage } from './page'

const meta = {
  title: 'Routes/Dashboard',
  component: DashboardPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DashboardPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}