import { Hono } from 'hono'
import { renderer } from './renderer'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const app = new Hono()

app.use(renderer)

function Root() {
  return (
    <>
     <h1 className="text-3xl font-bold underline">Hello!</h1>
     <Button className="mt-4" onClick={() => console.log('hello')}>Click Me</Button>
     <Checkbox />
    </>
  )
}

app.get('/', (c) => {
  return c.render(<Root />)
})

export default app
