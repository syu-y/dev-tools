/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  test: {
    // testの対象ファイル
    include: ['test/**/*.{test,spec}.{js,ts}'],
    globals: true,
    // testの環境
    environment: 'jsdom',
  },
});
