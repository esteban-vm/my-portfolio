import type { HTMLAttributes } from 'react'
import { clsx } from '@/utils'

interface NavBarProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean
}

export default function NavBar({ isOpen, ...rest }: NavBarProps) {
  const classes = clsx(
    'absolute right-0 flex w-full flex-col items-center justify-around text-nowrap text-center',
    'animate__animated nav-h md:nav-h-md lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8',
    isOpen ? 'top-[150%] bg-black/50 animate__backInDown' : 'animate__backOutUp'
  )

  return <nav {...rest} className={classes} />
}
