import type { HmrContext, ModuleNode } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * Creates a handleHotUpdate function that reloads specified modules on SSR changes
 * @param modulesToReload - Array of relative module paths to reload (e.g., ['src/builder.ts'])
 * @returns handleHotUpdate function for Vite configuration
 */
export function createHotUpdateHandler(modulesToReload: string[]) {
  return ({ server, file, modules }: HmrContext): void | ModuleNode[] => {
    // Check if any of the changed modules should trigger a reload
    const shouldReload = modulesToReload.some(modulePath => {
      const absolutePath = path.join(__dirname, modulePath)
      return file === absolutePath || file.endsWith(modulePath.replace(/^\.\//, ''))
    })

    // If builder.ts or routes change, reload in all environments
    if (shouldReload || file.includes('/routes/')) {
      console.log(`🔄 Reloading due to change in: ${file}`)

      // Reload modules in all environments
      const environments = server.environments
      if (environments) {
        for (const [envName, env] of Object.entries(environments)) {
          console.log(`  Reloading in environment: ${envName}`)

          // Clear module from each environment's module graph
          for (const modulePath of modulesToReload) {
            const absolutePath = path.join(__dirname, modulePath)
            const module = env.moduleGraph?.getModuleById?.(absolutePath)
            if (module) {
              env.moduleGraph.invalidateModule(module)
            }
          }
        }
      }

      // Trigger full reload to ensure clean state
      server.hot.send({ type: 'full-reload' })
      return []
    }

    // Default behavior for other files
    return modules
  }
}

