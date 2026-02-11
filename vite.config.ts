import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AI-PATHSHALA/', // This ensures assets are loaded from the correct subdirectory on GitHub Pages
  build: {
    outDir: 'dist',
  }
});
