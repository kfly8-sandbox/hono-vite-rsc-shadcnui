import app from './builder';

// Import routes
import './routes/_404'
import './routes/_error'
import.meta.glob('./routes/**/!(_*|$*|*.test|*.spec).(ts|tsx)', { eager: true })

export default app;
