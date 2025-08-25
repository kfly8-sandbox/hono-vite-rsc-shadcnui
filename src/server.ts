import { Hono } from 'hono'
import { Layout } from './layout'
import { rscRenderer } from './rsc-renderer'
import { logger } from 'hono/logger'

import notFound from './routes/_404'
import onError from './routes/_error'

const app = new Hono()

app.use(rscRenderer({ Layout }))
app.use(logger())
//app.notFound(notFound)
app.onError(onError)

const modules = import.meta.glob([
  './routes/**/!(_*|$*|*.test|*.spec).(ts|tsx)'
], { eager: true })

for (const path in modules) {
  const module = modules[path] as any
  if (module.default) {
    app.route('/', module.default)
  }
}

export default app;
