'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2, Plus, CheckCircle2 } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Build a React Server Components app', completed: true },
    { id: 2, text: 'Integrate shadcn/ui components', completed: true },
    { id: 3, text: 'Deploy to Cloudflare Workers', completed: false },
    { id: 4, text: 'Add more interactive features', completed: false },
  ])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ])
      setInputValue('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const totalCount = todos.length

  return (
    <>
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full">
          <CheckCircle2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {completedCount} / {totalCount} completed
          </span>
        </div>
        {completedCount === totalCount && totalCount > 0 && (
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            All tasks completed! 🎉
          </span>
        )}
      </div>

      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        />
        <Button
          onClick={addTodo}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Task
        </Button>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No tasks yet. Add one to get started!
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className={`group flex items-center space-x-3 p-4 rounded-lg border transition-all ${
                todo.completed
                  ? 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700'
                  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:shadow-md'
              }`}
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-indigo-600 data-[state=checked]:to-purple-600"
              />
              <span
                className={`flex-1 ${
                  todo.completed
                    ? 'line-through text-gray-500 dark:text-gray-500'
                    : 'text-gray-900 dark:text-gray-100'
                }`}
              >
                {todo.text}
              </span>
              <Button
                onClick={() => deleteTodo(todo.id)}
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))
        )}
      </div>

      {todos.length > 0 && (
        <div className="mt-6 flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <button
            onClick={() => setTodos(todos.filter((todo) => !todo.completed))}
            className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            Clear completed
          </button>
          <div className="flex space-x-4">
            <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              All
            </button>
            <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Active
            </button>
            <button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Completed
            </button>
          </div>
        </div>
      )}
    </>
  )
}