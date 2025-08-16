"use client"

import { useState } from 'react'

import { Button } from "@/components/ui/button"

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center space-x-4">
        <Button onClick={() => setCount(count + 1)}>increment</Button>
        <span className="text-xl">{count}</span>
      </div>
    </>
  )
}

