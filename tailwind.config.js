/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--my-font)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: '#F7F5F0',
          elevated: '#FFFFFF',
          muted: '#EFECE4',
          border: '#DED9CE',
        },
        obsidian: {
          DEFAULT: '#111110',
          elevated: '#1A1917',
          muted: '#242220',
          border: '#2E2C28',
        },
        ink: {
          DEFAULT: '#161513',
          muted: '#57534E',
          dark: '#F2EFE9',
          'dark-muted': '#A8A29E',
        },
        accent: {
          DEFAULT: '#B93815',
          hover: '#9A2D10',
          dark: '#FB923C',
          'dark-hover': '#FDBA74',
        },
      },
    },
  },
  plugins: [],
}
