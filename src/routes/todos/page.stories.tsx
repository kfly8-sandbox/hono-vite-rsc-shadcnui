import type { Meta, StoryObj } from '@storybook/react'
import { TodosPage } from './page'

const meta = {
  title: 'Routes/Todos',
  component: TodosPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TodosPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}