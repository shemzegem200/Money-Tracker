import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5173"
  },
  define: {
    'process.env.VITE_NODE_API_BACKEND_URL': JSON.stringify(process.env.VITE_NODE_API_BACKEND_URL),
  },
});