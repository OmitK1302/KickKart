import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/KickCart/",
  server:{
    port: 3000,
    proxy: {
      '/KickCart/api': {
        target: 'http://localhost:5000', // Backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/KickCart/, ''), // Strip /KickCart prefix
      },
    },
  }
})
