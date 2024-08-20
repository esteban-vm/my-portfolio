import Image from 'next/image'
import tw from 'tailwind-styled-components'

export const FlagImage = tw(Image)`

  inline

  w-auto

  contrast-125

  ~h-8/12

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

  text-neon-green-darker

  outline-none

  ~w-20/24

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

  before:content-['']

  before:~h-10/12

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

  after:content-['ES']

  after:~size-10/12

  default:after:left-0

  checked:after:right-0

  checked:after:content-['EN']

`

export const MusicButton = tw.button`

  pointer-events-auto

  flex

  items-center

  justify-center

  rounded-md

  border

  border-neon-green-light

  bg-black/80

  text-neon-green-darker

  shadow-md

  shadow-neon-green-light

  backdrop-blur-sm

  transition-all

  ~size-10/12

  active:scale-95

  [&>svg]:size-1/2

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

`
