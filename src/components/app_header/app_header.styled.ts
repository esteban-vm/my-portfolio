import tw from 'tailwind-styled-components'
import { clsx } from '@/utils'

export const InnerWrapper = tw.div`

  relative

  flex

  size-full

  items-center

  justify-around

`

export const Logo = tw.a`

  animate-glitch

  text-wrap

  text-center

  font-saiba45

  text-neon-yellow

  ~text-4xl/7xl

  logo-shadow

  hover:animate-none

  [&>span]:hidden

  [&>span]:font-saiba45

  [&>span]:md:inline

`

export const MobileButton = tw.button`

  pointer-events-auto

  flex

  items-center

  justify-center

  text-neon-yellow

  lg:hidden

  [&>svg]:~size-8/10

  active:[&>svg]:scale-90

`

export const NavBar = tw.nav<NavBarProps>`

  ${({ $isOpen }) => ($isOpen ? dynamicClasses.openNavBar : dynamicClasses.defaultNavBar)}

  absolute

  flex

  w-[95%]

  flex-col

  items-center

  justify-around

  text-nowrap

  bg-black/70

  text-center

  duration-700

  fill-mode-forwards

  nav-height-sm

  md:nav-height-md

  lg:static

  lg:size-auto

  lg:animate-none

  lg:flex-row

  lg:gap-8

  lg:bg-transparent

`

export const NavItem = tw.a<NavLinkProps>`

  ${({ $isActive }) => $isActive && dynamicClasses.activeLink}

  relative

  inline-block

  font-bold

  uppercase

  text-neon-yellow

  ~text-sm/base

  after:bottom-0

  after:left-0

  after:h-1

  after:w-full

  after:origin-bottom-right

  after:scale-x-0

  after:bg-neon-yellow

  after:transition-transform

  after:duration-200

  after:ease-out

  after:content-[""]

  hover:opacity-90

  hover:after:origin-bottom-left

  hover:after:scale-x-100

  active:scale-95

  lg:after:absolute

`

export const Wrapper = tw.header`

  container

  pointer-events-none

  absolute

  left-1/2

  top-3

  z-30

  flex

  h-[11vh]

  -translate-x-1/2

  md:h-[12vh]

  lg:h-[13vh]

  [&_a]:pointer-events-auto

`

interface NavBarProps {
  $isOpen: boolean
}

interface NavLinkProps {
  $isActive: boolean
}

const dynamicClasses = {
  activeLink: clsx('!text-neon-green-dark after:!bg-neon-green-dark'),
  defaultNavBar: clsx('top-[-500%] animate-out slide-out-to-top'),
  openNavBar: clsx('top-full animate-in slide-in-from-top'),
}
