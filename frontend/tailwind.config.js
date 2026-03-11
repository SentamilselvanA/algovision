export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        secondary: '#a78bfa',
        accent: '#34d399',
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
          lighter: '#2d3748'
        },
        neon: {
          cyan: '#22d3ee',
          purple: '#a78bfa',
          green: '#34d399',
          pink: '#f472b6'
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(34, 211, 238, 0.5)',
        'neon-purple': '0 0 20px rgba(167, 139, 250, 0.5)',
        'neon-green': '0 0 20px rgba(52, 211, 153, 0.5)'
      }
    }
  },
  plugins: []
}
