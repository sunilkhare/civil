import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/civil/', // Update this to match your GitHub repository name
  build: {
    outDir: 'dist',
    assetsDir: 'public',
    sourcemap: false,
    // Ensure proper asset handling for GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})

 