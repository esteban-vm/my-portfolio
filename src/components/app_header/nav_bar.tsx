import type { HTMLAttributes } from 'react'
import { clsx } from '@/utils'

interface NavBarProps extends HTMLAttributes<HTMLElement> {
  isOpen: boolean
}

export default function NavBar({ isOpen, ...rest }: NavBarProps) {
  const classes = clsx(
    'absolute flex w-[95%] flex-col items-center justify-around text-nowrap rounded-lg',
    'bg-black/60 text-center duration-700 fill-mode-forwards nav-h md:nav-h-md',
    'lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8 lg:bg-transparent',
    isOpen ? 'top-[150%] animate-in slide-in-from-top' : 'top-[-500%] animate-out slide-out-to-top'
  )

  return <nav {...rest} className={classes} />
}
