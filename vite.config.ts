import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: "[name]_[local]_[hash:8]",
    }
  },
  resolve: {
    alias: [
      // Base
      { find: "~base", replacement: path.resolve(__dirname, "./src/components/atomic/base") },

      // Atomic
      { find: "~atoms", replacement: path.resolve(__dirname, "./src/components/atomic/atoms") },
      { find: "~molecules", replacement: path.resolve(__dirname, "./src/components/atomic/molecules") },
      { find: "~organisms", replacement: path.resolve(__dirname, "./src/components/atomic/organisms") },
      { find: "~layouts", replacement: path.resolve(__dirname, "./src/components/atomic/layouts") },

      // Pages
      { find: "~pages", replacement: path.resolve(__dirname, "./src/components/pages") },

      // support infrastructure
      { find: "~services", replacement: path.resolve(__dirname, "./src/services") },
      { find: "~repositories", replacement: path.resolve(__dirname, "./src/repositories") },
      { find: "~config", replacement: path.resolve(__dirname, "./src/config") },

      // etc
      { find: "~components", replacement: path.resolve(__dirname, "./src/components") },
      { find: "~src", replacement: path.resolve(__dirname, "./src") },
      { find: "~root", replacement: path.resolve(__dirname, "./") },
    ]
  }
})
