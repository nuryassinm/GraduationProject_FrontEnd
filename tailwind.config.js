/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spin: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'rotate-360': 'rotate 0.5s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animationDelay: {
        '-0.9s': '-0.9s',
        '-0.6s': '-0.6s',
        '-0.3s': '-0.3s',
        '0s': '0s',
      },
      translate: {
        '8': '2rem',
        '4': '1rem',
      },
      rotate: {
        '20': '20deg',
        '45': '45deg',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
    // ... other plugins
  ]
}
