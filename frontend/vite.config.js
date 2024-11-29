import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import sass from 'sass-embedded';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});