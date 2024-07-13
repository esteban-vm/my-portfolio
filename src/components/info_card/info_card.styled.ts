import Link from 'next/link'
import { LuArrowBigRight } from 'react-icons/lu'
import tw from 'tailwind-styled-components'

export const Wrapper = tw.div`

  absolute

  left-1/2

  top-[14vh]

  z-10

  -translate-x-1/2

  animate-blink

  rounded-md

  bg-neon-green-dark

  text-center

  font-semibold

  uppercase

  text-black

  ~w-80/[36rem]

  ~p-3/5

  hover:paused

  md:top-[15vh]

  lg:top-[16vh]

  [&>div]:relative

`

export const InfoLink = tw(Link)`

  absolute

  left-1/2

  top-full

  w-[90%]

  -translate-x-1/2

  rounded-md

  bg-black/60

  font-bold

  text-neon-green-darker

  backdrop-blur-sm

  transition-all

  ~px-2/4

  ~py-1/3

  link-shadow

  hover:opacity-95

  active:scale-90

`

export const MainText = tw.p`

  line-clamp-3

  text-pretty

  ~text-xs/base

`

export const LinkText = tw.span`

  align-middle

  ~text-2xs/sm

`

export const ArrowIcon = tw(LuArrowBigRight)`

  inline

  ~size-4/5

`