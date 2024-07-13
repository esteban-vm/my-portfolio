import Image from 'next/image'
import tw from 'tailwind-styled-components'

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

export const MusicButton = tw.button`

  pointer-events-auto

  flex

  items-center

  justify-center

  rounded-full

  bg-orange-500

  ~size-8/12

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

  before:bg-transparent

  before:backdrop-blur-sm

  before:content-[""]

  before:~h-8/12

  before:link-shadow

  after:visible

  after:absolute

  after:top-1/2

  after:box-border

  after:flex

  after:-translate-y-1/2

  after:items-center

  after:justify-center

  after:rounded-full

  after:border-2

  after:border-transparent

  after:bg-black/80

  after:content-["ES"]

  after:~size-8/12

  default:after:left-0

  checked:after:right-0

  checked:after:content-["EN"]

`

export const InnerWrapper = tw.div`

  inline

  select-none

  text-center

`

export const FlagImage = tw(Image)`

  inline

  w-auto

  contrast-125

  ~h-8/12

`
