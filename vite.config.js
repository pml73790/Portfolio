import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<username>.github.io/<repo-name>/,
// set base to '/<repo-name>/'. If this repo IS <username>.github.io
// (a user/organization site), leave base as '/'.
export default defineConfig({
  plugins: [react()],
  base: '/MyLy-Portfolio/',
})
