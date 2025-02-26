import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import envCompatible from 'vite-plugin-env-compatible'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),envCompatible()],
  envPrefix: 'REACT_APP_',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
