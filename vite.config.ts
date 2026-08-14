import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'three', test: /node_modules[\\/]three/, priority: 20 },
            { name: 'r3f-vendor', test: /node_modules[\\/]@react-three/, priority: 15 },
            { name: 'gsap', test: /node_modules[\\/]gsap/, priority: 10 },
            { name: 'vendor', test: /node_modules/, priority: 5 },
            { name: 'common', minShareCount: 2, minSize: 10000 },
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
