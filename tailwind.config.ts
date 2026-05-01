import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#15203D',
        'navy-dark': '#0d1628',
        'off-white': '#F5F5F6',
        sage: '#6B9E82',
        'sage-faint': 'rgba(107, 158, 130, 0.10)',
        'border-sage': 'rgba(107, 158, 130, 0.22)',
        body: '#3d4455',
        muted: '#7a8196',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 24px rgba(21, 32, 61, 0.08)',
        'custom-lg': '0 10px 40px rgba(21, 32, 61, 0.14)',
      },
      borderRadius: {
        custom: '5px',
      },
    },
  },
  plugins: [],
};

export default config;
