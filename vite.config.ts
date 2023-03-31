import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@src':path.resolve(__dirname, './src/'),
      components:path.resolve(__dirname, './src/components'),
    }
  },
  envDir:'../src/config',
  server:{
    proxy:{
      '/api':{
        target:"https://api-pl.zhaojiafang.com", // http://php-api.test2.zhaojiafang.com
        changeOrigin: true,
      }
    }
  },
})
