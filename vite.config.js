import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/CodeCollab.io/",
  plugins: [react()],
  build : {
    outDir : 'dist',
    
  }
})
