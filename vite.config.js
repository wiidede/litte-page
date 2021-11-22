import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {join} from 'path';
import Components from 'unplugin-vue-components/vite';
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
  ],
  resolve: {
    alias: {
      '/@/': join(__dirname, 'src') + '/',
    },
  },
  server: {
    open: true,
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    sourcemap: true,
  },
});
