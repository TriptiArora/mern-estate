import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//Each time you start requesting the api that starts with
//'/api' then this attach the 'http://localhost:3000'at the beginning!

// https://vitejs.dev/config/

export default defineConfig({
  server:
  {
    proxy:
    {
      '/api':
      {
        target:'http://localhost:3000',
        secure:false,
      },
    },
  },
  plugins: [react()],
})
