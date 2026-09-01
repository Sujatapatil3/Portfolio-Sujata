import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
// NOTE: If deploying to GitHub Pages at https://<user>.github.io/<repo>/,
// set `base` to '/<repo>/'. For Vercel or a custom domain, keep it as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/sujata-portfolio/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  },
});
