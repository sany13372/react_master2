import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    svgr({ exportAsDefault: true }),
    react(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
    ],
  },
  define: {
    __IS_DEV: JSON.stringify(true),
    __API: JSON.stringify('http://localhost:8000'),
    __PROJECT: JSON.stringify('frontend'),
  },
});
