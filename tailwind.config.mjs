/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',
        emerald: {
          DEFAULT: '#10B981',
          500: '#10B981',
        },
        indigo: {
          DEFAULT: '#6366F1',
          500: '#6366F1',
        },
        background: '#F8FAFC',
        error: '#E11D48',
        border: '#E2E8F0',
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
};
