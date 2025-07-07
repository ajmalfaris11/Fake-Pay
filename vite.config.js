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
        theme_color: '#1e40af',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: 'https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/secure_payment-512.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/secure_payment-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
