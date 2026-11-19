import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base is '/' for Capacitor mobile build (not GitHub Pages path)
  base: '/',
  build: {
    // Optimize for mobile
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', '@mui/material', '@mui/icons-material'],
          'vendor-icons': ['react-icons'],
        },
      },
    },
  },
})