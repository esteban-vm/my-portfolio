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
      },
      animatedSettings: {
        animatedSpeed: 500,
        classes: ['backInDown', 'backOutUp'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  plugins: [require('tailwindcss-touch')(), require('tailwindcss-animatecss')],
}

export default tailwindConfig
