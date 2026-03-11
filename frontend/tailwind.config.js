/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155'
        }
      }
    }
  },
  plugins: []
}
