// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Fake Pay App',
        short_name: 'FakePay',
        description: 'Fake payment success app',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1e40af',
        icons: [
          {
            src: 'multiple-icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'multiple-icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
