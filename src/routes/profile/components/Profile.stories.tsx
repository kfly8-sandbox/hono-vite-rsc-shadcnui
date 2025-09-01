import type { Meta, StoryObj } from '@storybook/react'
import { Profile } from './Profile'

const meta = {
  title: 'Routes/Profile/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomData: Story = {
  parameters: {
    userData: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'https://avatars.githubusercontent.com/u/1234567',
    },
  },
}