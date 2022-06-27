import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include: [/\.md$/,/\.vue$/]
  }), Markdown()],
  build:{
    lib:{
      entry: './packages/index.js',
      name: 'last-ui'
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve:{
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
