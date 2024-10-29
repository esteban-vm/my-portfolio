// @ts-nocheck

import transforms from '@xpd/tailwind-3dtransforms'
import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import mobileHover from 'tailwind-mobile-hover'
import animate from 'tailwindcss-animate'
import touch from 'tailwindcss-touch'
import { Fonts } from './src/constants'
import { utilities, getNeonColor, keyframes } from './tailwind.utils.mjs'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    extract,
    files: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  },
  theme: {
    screens,
    fontSize,
    extend: {
      keyframes,
      fontSize: {
        '2xs': '0.625rem',
      },
      fontFamily: {
        balsamiq: `var(${Fonts.balsamiq})`,
        montserrat: `var(${Fonts.montserrat})`,
        saiba45: `var(${Fonts.saiba45})`,
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      animation: {
        glitch: 'glitch 10s step-end infinite',
        blink: 'blink 5s infinite linear',
      },
      colors: {
        /* #a4d3be */ ...getNeonColor('green-lighter'),
        /* #0cffed */ ...getNeonColor('green-light'),
        /* #00e0c0 */ ...getNeonColor('green-dark'),
        /* #17c47c */ ...getNeonColor('green-darker'),
        /* #ff15bc */ ...getNeonColor('magenta-light'),
        /* #31202b */ ...getNeonColor('magenta-dark'),
        /* #d3fc17 */ ...getNeonColor('yellow'),
      },
    },
  },
  plugins: [fluid, animate, touch(), transforms, mobileHover, utilities],
}

export default tailwindConfig
