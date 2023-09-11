/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['var(--font-baloo-2)'],
        notoSansJp: ['var(--font-noto-sans-jp)'],
        firaCode: ['var(--font-fira-code)'],
      },
    },
    screens: {
      sp: { max: '640px' },
      // => @media (max-width: 640px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
  corePlugins: {
    preflight: false, // TailWindCSSのResetCSSとMantineの競合を防ぐために無効化
  },
};
