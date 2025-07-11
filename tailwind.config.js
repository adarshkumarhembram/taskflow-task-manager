import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const tailwindConfig = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default defineConfig({
  plugins: [react()],
})
