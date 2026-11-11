/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0A0A0F', night: '#111118', surface: '#1A1A24', indigo: '#6C63FF', lavender: '#A89CFF' },
      fontFamily: { sans: ['Inter', 'sans-serif'], display: ['Syne', 'sans-serif'] }
    }
  },
  plugins: []
}
