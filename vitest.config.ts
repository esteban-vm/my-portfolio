/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    reporters: 'verbose',
    silent: true,
    resolveSnapshotPath(path, extension) {
      return path.replace(/\.test\.([tj]sx?)/, `.test.$1${extension}`)
    },
  },
})
