import { honoBuilder } from 'hono-builder'
import { Layout } from './layout'
import { rscRenderer } from './rsc-renderer'
import { logger } from 'hono/logger'

const builder = honoBuilder();

builder.use(rscRenderer({ Layout }))
builder.use(logger())

export default builder
