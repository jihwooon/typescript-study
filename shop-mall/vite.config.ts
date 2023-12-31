import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRouterPlugin from 'vite-plugin-next-react-router';
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRouterPlugin(), Pages()],
})
