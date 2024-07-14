import Image from 'next/image'
import tw from 'tailwind-styled-components'

export const FlagImage = tw(Image)`

  inline

  w-auto

  contrast-125

  ~h-8/12

`

export const IconWrapper = tw.span`

  flex

  size-full

  -translate-y-1

  items-center

  justify-center

  rounded-full

  bg-black/80

  transition-transform

  duration-200

  will-change-transform

  group-hover:-translate-y-2

  group-active:-translate-y-[2px]

  [&>svg]:fill-neon-green-dark

  [&>svg]:stroke-neon-green-dark

`

export const InnerWrapper = tw.div`

  inline

  select-none

  text-center

`

export const LanguageSwitch = tw.input`

  pointer-events-auto

  invisible

  relative

  cursor-pointer

  align-middle

  font-bold

  text-neon-green-dark

  outline-none

  ~w-16/24

  before:visible

  before:absolute

  before:top-1/2

  before:w-full

  before:-translate-y-1/2

  before:rounded-full

  before:border

  before:border-neon-green-light

  before:bg-transparent

  before:shadow-md

  before:shadow-neon-green-light

  before:backdrop-blur-sm

  before:content-[""]

  before:~h-8/12

  after:visible

  after:absolute

  after:top-1/2

  after:box-border

  after:flex

  after:-translate-y-1/2

  after:items-center

  after:justify-center

  after:rounded-full

  after:border

  after:border-neon-green-light

  after:bg-black/80

  after:content-["ES"]

  after:~size-8/12

  default:after:left-0

  checked:after:right-0

  checked:after:content-["EN"]

`

export const MusicButton = tw.button`

  group

  pointer-events-auto

  rounded-full

  bg-neon-green-dark

  outline-offset-4

  ~size-8/12

`

export const Wrapper = tw.footer`

  container

  pointer-events-none

  absolute

  bottom-3

  left-1/2

  z-20

  flex

  -translate-x-1/2

  items-center

  justify-around

  text-white

`
