import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://icon-sets.iconify.design/
    Icons({
      scale: 1, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
      compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
      jsx: 'react', // 'react' or 'preact'
      autoInstall: true, // 按需自动安装图标集
      // 自定义图标集
      customCollections: {
        svg: FileSystemIconLoader('./assets/svg', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }),
    // 按需自动导入组件
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    open: true,
    host: true,
    port: 7520,
  },
  preview: {
    open: true,
    host: true,
    port: 7520,
  },
})
