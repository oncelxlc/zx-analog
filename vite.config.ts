/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      vite: {experimental: {supportAnalogFormat: true}},
      content: {
        highlighter: 'shiki',
        shikiOptions: {
          highlight: {
            theme: 'one-dark-pro',
          },
          highlighter: {
            langs: [
              'json',
              'ts',
              'tsx',
              'js',
              'jsx',
              'html',
              'css',
              'scss',
              'less',
              'angular-html',
              'angular-ts',
            ],
            themes: ['one-dark-pro', 'github-dark', 'github-light'],
          },
        },
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default'],
  },
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
