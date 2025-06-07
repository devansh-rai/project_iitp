import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project_iitp/home',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
