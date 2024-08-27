import tw from 'tailwind-styled-components'

export const Button = tw.button`

  pointer-events-auto

  relative

  flex

  items-center

  justify-center

  rounded-md

  border-2

  border-neon-magenta-light

  bg-black/80

  text-neon-magenta-light

  shadow-inner

  shadow-neon-magenta-light

  backdrop-blur-sm

  transition-all

  ~size-10/14

  perspective-[0.2em]

  before:absolute

  before:top-[120%]

  before:h-1/6

  before:w-full

  before:scale-x-125

  before:scale-y-50

  before:transform

  before:bg-neon-magenta-light

  before:opacity-60

  before:blur-sm

  before:content-['']

  before:rotate-x-12

  after:absolute

  after:bottom-0

  after:left-0

  after:right-0

  after:top-0

  after:-z-10

  after:bg-neon-magenta-light

  after:opacity-0

  after:shadow

  after:shadow-neon-magenta-light

  after:transition-opacity

  after:ease-linear

  after:content-['']

  hover:text-white

  hover:before:opacity-80

  hover:after:opacity-100

  [&>svg]:size-3/4

`

export const Wrapper = tw.footer`

  container

  pointer-events-none

  absolute

  bottom-3

  left-1/2

  z-20

  flex

  h-[11vh]

  -translate-x-1/2

  items-start

  justify-around

  pt-3

  md:h-[12vh]

  lg:h-[13vh]

  pointer-coarse:landscape:pt-0

  pointer-coarse:landscape:lg:pt-3

`
