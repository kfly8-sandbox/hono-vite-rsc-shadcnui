import { Hono } from 'hono'
import { Layout } from './layout'
import { rscRenderer } from './rsc-renderer'
import { logger } from 'hono/logger'

const builder = new Hono();

builder.use(rscRenderer({ Layout }))
builder.use(logger())

export default builder
