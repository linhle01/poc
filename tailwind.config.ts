import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-header': 'var(--bg-header)',
        'bg-footer': 'var(--bg-footer)',
        'text-primary': 'var(--color-text-primary)',
      },
    },
  },
  plugins: [],
} satisfies Config;
