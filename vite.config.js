// vite.config.js
import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
    rollupOptions: {
        input: './main.js', // Update to your entry file
    },
  },
})
