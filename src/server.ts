
// Register routes
import './routes/_404'
import './routes/_error'
import.meta.glob('./routes/**/!(_*|$*|*.test|*.spec).(ts|tsx)', { eager: true })

import builder from './builder';
export default builder.build();
