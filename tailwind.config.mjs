import tailwindCSSTouch from 'tailwindcss-touch'

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
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [tailwindCSSTouch()],
}

export default tailwindConfig
