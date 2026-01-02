import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { devtools } from '@tanstack/devtools-vite'

// https://vite.dev/config/
export default defineConfig({
  experimental: {
    enableNativePlugin: true,
  },
  resolve: {
    tsconfigPaths: true
  },
  plugins: [
    devtools(),
    react(),
  ],
})
