import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tailwindcss from '@tailwindcss/vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), cloudflare(), nodePolyfills(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      buffer: 'buffer',
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
