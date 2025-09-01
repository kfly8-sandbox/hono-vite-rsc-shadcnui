import type { Meta, StoryObj } from '@storybook/react'
import { TodoList } from './TodoList'

const meta = {
  title: 'Routes/Todos/TodoList',
  component: TodoList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TodoList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInitialTodos: Story = {
  parameters: {
    initialState: {
      todos: [
        { id: '1', text: 'Write documentation', completed: false },
        { id: '2', text: 'Review pull request', completed: true },
        { id: '3', text: 'Update dependencies', completed: false },
      ],
    },
  },
}