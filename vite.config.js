import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// libs
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  clearScreen: true,
  plugins: [
    vue(),
    Icons({
      autoInstall: true
    }),
    Components({
      dirs: ['src/components', 'src/assets/icons'],
      dts: 'src/types/components.d.ts',
      resolvers: [
        IconsResolver({
          prefix: 'icon'
        })
      ]
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core'
      ],

      dts: 'src/types/auto-imports.d.ts',

      dirs: [
        'src/composables',
        'src/store'
      ],

      vueTemplate: true,

      eslintrc: {
        enabled: true
      }
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/mixins/_breakpoint.scss";
          @import "./src/assets/scss/mixins/_theme.scss";
        `
      }
    }
  },

  server: {
    port: 8098
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
