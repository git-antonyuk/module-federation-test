import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import legacy from '@vitejs/plugin-legacy'
import vue2 from '@vitejs/plugin-vue2'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    // legacy({
    //   targets: ['ie >= 11'],
    //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    // }),
    federation({
      name: 'vite-side',
      filename: 'remoteEntry.js',
      exposes: {
        './Content': {
          name: 'content',
          import: './src/App.vue',
        },
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
