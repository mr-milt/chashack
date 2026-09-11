import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig(() => {
  const isRemote = process.env.VITE_REMOTE === 'true'

  return {
    plugins: [react()],
    server: {
      allowedHosts: ['codecats.kodkaos.xyz'],
      hmr: isRemote
        ? {
            // Public host the browser connects to. Must match nginx's
            // server_name and the ssl_certificate CN.
            host: 'codecats.kodkaos.xyz',
            protocol: 'wss',
            clientPort: 443,
          }
        : true, // let Vite use sensible localhost defaults
    },
  }
})
