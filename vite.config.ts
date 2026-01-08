
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajusta 'mar-y-carne-gourmet' al nombre exacto de tu repositorio en GitHub
  base: '/mar-y-carne-gourmet/',
})
