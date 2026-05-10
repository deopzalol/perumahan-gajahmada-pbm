import { defineConfig } from '@tanstack/start/config'
import { tanstackStartConfigs } from '@lovable.dev/vite-tanstack-config'

export default defineConfig(
  tanstackStartConfigs({
    server: {
      preset: 'vercel',
    },
  })
)
