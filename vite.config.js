import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lsfee-web/', // AICI E SECRETUL: Asta face link-ul sa mearga pe GitHub
})