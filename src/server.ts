import { Hono } from 'hono'
import { Layout } from './layout'
import { rscRenderer } from './rsc-renderer'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(rscRenderer({ Layout }))
app.use(logger())

const modules = import.meta.glob([
  './routes/**/_404.(ts|tsx)',
  './routes/**/_error(.ts|tsx)',
  './routes/**/!(_*|$*|*.test|*.spec).(ts|tsx)'
], { eager: true })

for (const path in modules) {
  const module = modules[path] as any
  if (module.default) {
    app.route('/', module.default)
  }
}

export default app;
