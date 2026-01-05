import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // Remove the '..' so it looks in the same folder as this config file
  envDir: path.resolve(__dirname, '.'), 
})