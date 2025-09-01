'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Trash2, Plus } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Build a React Server Components app', completed: true, createdAt: new Date('2024-01-01') },
    { id: 2, text: 'Integrate shadcn/ui components', completed: true, createdAt: new Date('2024-01-02') },
    { id: 3, text: 'Deploy to Cloudflare Workers', completed: false, createdAt: new Date('2024-01-03') },
    { id: 4, text: 'Add more interactive features', completed: false, createdAt: new Date('2024-01-04') },
  ])
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
  const inputRef = useRef<HTMLInputElement>(null)

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
          createdAt: new Date(),
        },
      ])
      setInputValue('')
      // Focus back on the input after adding a task
      inputRef.current?.focus()
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

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  const activeCount = todos.filter((todo) => !todo.completed).length
  const totalCount = todos.length

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="space-y-6">
      <Card className="border-2">
        <CardContent className="space-y-4 pt-6">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="What needs to be done?"
              className="flex-1"
            />
            <Button onClick={addTodo} size="default">
              <Plus className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>

          <Tabs value={filter} onValueChange={(value) => setFilter(value as typeof filter)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({totalCount})</TabsTrigger>
              <TabsTrigger value="active">Active ({activeCount})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({completedCount})</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="mt-4 space-y-1">
              {filteredTodos.length === 0 ? (
                <Card>
                  <CardContent className="text-center py-8">
                    <p className="text-muted-foreground text-sm">
                      {filter === 'completed'
                        ? 'No completed tasks yet'
                        : filter === 'active'
                        ? 'No active tasks. Great job!'
                        : 'No tasks yet. Add one to get started!'}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-1">
                  {filteredTodos.map((todo) => (
                    <div
                      key={todo.id}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent/50 transition-all ${
                        todo.completed
                          ? 'opacity-60'
                          : ''
                      }`}
                    >
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(todo.id)}
                        className="h-4 w-4 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <span
                        className={`flex-1 text-sm ${
                          todo.completed
                            ? 'line-through text-muted-foreground'
                            : ''
                        }`}
                      >
                        {todo.text}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {todo.createdAt.toLocaleDateString()}
                      </span>
                      <Button
                        onClick={() => deleteTodo(todo.id)}
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {todos.length > 0 && completedCount > 0 && (
            <div className="flex justify-end">
              <Button
                onClick={clearCompleted}
                variant="outline"
                size="sm"
                className="text-destructive hover:text-destructive"
              >
                Clear completed ({completedCount})
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
