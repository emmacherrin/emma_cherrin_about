// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    // ... other config settings
    build: {
        // ... other build settings
        rollupOptions: {
            input: 'main.js', // Update to your entry file
        },
    },
});