import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    watch: {
      include: 'src/**/*',
      exclude: 'ops/**/*',
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),

    //    {
    //      name: 'post-build-commands',
    //      'writeBundle': () => {
    //        deploy()
    //          .then(r => console.log(r, "Success!"))
    //          .catch(e => console.log(e, "Error!"));
    //        setTimeout(() => {
    //        }, 500);
    //      }
    //    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
