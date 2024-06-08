import plugin from 'tailwindcss/plugin'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
        saiba45: 'var(--font-saiba45)',
      },
      animatedSettings: {
        animatedSpeed: 500,
        classes: ['backInDown', 'backOutUp'],
      },
      textShadow: {
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        sm: '0 1px 2px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        glitch: {
          '0%': {
            'clip-path':
              'polygon(96% 81%, 23% 67%, 3% 70%, 81% 58%, 63% 65%, 71% 18%, 60% 85%, 22% 27%, 26% 25%, 60% 53%, 79% 62%, 61% 6%, 8% 1%, 12% 81%, 12% 21%, 75% 7%, 31% 61%, 69% 79%, 41% 46%, 3% 7%, 94% 96%, 16% 40%, 10% 99%, 22% 67%, 83% 41%, 92% 76%)',
          },
          '4%': {
            'clip-path':
              'polygon(25% 86%, 59% 45%, 12% 89%, 25% 14%, 1% 82%, 36% 13%, 85% 53%, 59% 8%, 12% 76%, 69% 93%, 3% 49%, 74% 64%, 6% 87%, 36% 94%, 55% 30%, 53% 16%, 26% 39%, 7% 69%, 23% 96%, 83% 38%, 33% 25%, 7% 36%, 28% 41%, 27% 85%, 9% 77%, 64% 47%)',
          },
          '27%': {
            'clip-path':
              'polygon(39% 7%, 81% 81%, 97% 19%, 37% 54%, 19% 66%, 98% 57%, 10% 45%, 60% 82%, 10% 96%, 46% 53%, 70% 68%, 89% 24%, 6% 45%, 81% 29%, 68% 54%, 77% 32%, 90% 44%, 28% 36%, 66% 72%, 12% 98%, 83% 10%, 11% 71%, 71% 78%, 11% 93%, 50% 29%, 36% 36%)',
          },
          '51%': {
            'clip-path':
              'polygon(18% 34%, 31% 77%, 73% 57%, 69% 50%, 62% 33%, 34% 10%, 3% 66%, 76% 4%, 44% 97%, 43% 50%, 68% 3%, 72% 17%, 94% 57%, 46% 74%, 69% 17%, 56% 24%, 93% 59%, 10% 84%, 93% 76%, 70% 26%, 93% 2%, 84% 83%, 25% 4%, 49% 93%, 14% 64%, 31% 60%)',
          },
          '66%': {
            'clip-path':
              'polygon(91% 2%, 50% 60%, 51% 75%, 11% 27%, 96% 3%, 36% 12%, 22% 49%, 21% 75%, 13% 30%, 29% 41%, 2% 76%, 72% 52%, 40% 56%, 19% 38%, 32% 7%, 30% 34%, 3% 27%, 48% 17%, 1% 33%, 16% 41%, 24% 21%, 47% 42%, 16% 4%, 81% 91%, 45% 83%, 21% 21%)',
          },
          '91%': {
            'clip-path':
              'polygon(21% 73%, 5% 5%, 41% 55%, 3% 59%, 99% 94%, 66% 86%, 30% 46%, 69% 100%, 81% 83%, 34% 55%, 36% 8%, 2% 5%, 94% 91%, 90% 71%, 38% 92%, 55% 46%, 67% 68%, 59% 98%, 30% 87%, 22% 45%, 59% 76%, 47% 6%, 79% 3%, 20% 61%, 61% 96%, 46% 18%)',
          },
          '1%, 5%, 28%, 53%, 67%, 92%': {
            'clip-path': 'none',
          },
        },
      },
      animation: {
        glitch: 'glitch 10s step-end infinite',
      },
      colors: {
        brand: 'oklch(var(--brand))',
        brand2: 'oklch(var(--brand2))',
        cyber: 'oklch(var(--cyber))',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-touch')(),
    require('tailwindcss-animatecss'),
    plugin(function ({ matchUtilities, theme, addUtilities }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({ textShadow: value }),
        },
        {
          values: theme('textShadow'),
        }
      )
      addUtilities({
        '.animate-pause': {
          'animation-play-state': 'paused',
        },
        '.logo-shadow': {
          'text-shadow': '4px 2px 0px oklch(var(--brand2)), 8px 4px 30px oklch(var(--brand))',
        },
      })
    }),
  ],
}

export default tailwindConfig
