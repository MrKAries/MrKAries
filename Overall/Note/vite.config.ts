import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 解决 vite 作为 qiankun 子应用的方案
import qiankun from 'vite-plugin-qiankun'

// 主应用注册的子应用名称
const name = 'karise-note'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // vite-plugin-qiankun 生产环境下需要指定 base 运行域名
  base: mode === 'development' ? '/' : 'http://0.0.0.0:7521',
  plugins: [
    react(),
    qiankun(name, {
      // 开发环境 vite 作为子应用时与热更新有冲突
      // useDevMode = true 不使用热更新
      useDevMode: true,
    }),
  ],
  server: {
    host: true,
    port: 7521,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
}))
