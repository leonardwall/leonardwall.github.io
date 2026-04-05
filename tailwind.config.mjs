/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        panel: '#121a2d',
        text: '#edf2f7',
        muted: '#9fb0c7',
        accent: '#7dd3fc',
        line: '#21304a'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.25)'
      },
      maxWidth: {
        content: '76rem'
      }
    }
  },
  plugins: []
};
