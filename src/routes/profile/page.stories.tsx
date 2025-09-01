import type { Meta, StoryObj } from '@storybook/react'
import { ProfilePage } from './page'

const meta = {
  title: 'Routes/Profile',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}