/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
      // '/@/': path.join(__dirname, 'src/'),
      // '/@pages/': path.join(__dirname, 'src/pages'),
      // '/@components/': path.join(__dirname, 'src/components'),
      // '/@lib/': path.join(__dirname, 'src/lib'),
      // '/@utils/': path.join(__dirname, 'src/utils'),
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
      },
      {
        find: '@lib',
        replacement: fileURLToPath(new URL('./src/lib', import.meta.url)),
      },
      {
        find: '@utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url)),
      },
    ],
  },
  test: {
    // testの対象ファイル
    include: ['test/**/*.{test,spec}.{js,ts}'],
    globals: true,
    // testの環境
    environment: 'jsdom',
  },
});
