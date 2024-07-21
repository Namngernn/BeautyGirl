import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        // ควรจะว่างเปล่า หรือระบุเฉพาะ plugins ที่คุณต้องการเพิ่มเติม
      ]
    }
  }
})