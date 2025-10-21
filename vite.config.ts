import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import packageJson from './package.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
  },
  build: {
    // Enable source maps for production (needed for GlitchTip error stacktraces)
    sourcemap: true,
  },
  define: {
    // Inject app version for Sentry release tracking
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
})
