import tailwindFluid, { extract, fontSize, screens } from 'fluid-tailwind'
import tailwindAnimate from 'tailwindcss-animate'
// @ts-ignore
import tailwindTouch from 'tailwindcss-touch'
import { Fonts } from './src/constants'
import { customs, getNeonColor, keyframes } from './tailwind.utils.mjs'

/** @type {import("tailwindcss").Config} */
const tailwindConfig = {
  content: {
    extract,
    files: ['./src/(app|components|scenes|shared)/**/*.{js,ts,jsx,tsx,mdx}'],
  },
  theme: {
    screens,
    fontSize,
    extend: {
      fontSize: {
        '2xs': '0.625rem',
      },
      fontFamily: {
        balsamiq: `var(${Fonts.balsamiq})`,
        montserrat: `var(${Fonts.montserrat})`,
        saiba45: `var(${Fonts.saiba45})`,
      },
      keyframes,
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
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [tailwindFluid, tailwindAnimate, tailwindTouch(), customs],
}

export default tailwindConfig
