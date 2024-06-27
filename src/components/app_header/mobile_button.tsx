import type { ButtonHTMLAttributes } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { clsx } from '@/utils'

interface MobileButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean
}

export default function MobileButton({ isOpen, ...rest }: MobileButtonProps) {
  const classes = clsx(
    'pointer-events-auto flex items-center justify-center text-neon-yellow',
    'lg:hidden [&>svg]:size-8 active:[&>svg]:scale-90 md:[&>svg]:size-10'
  )

  return (
    <button {...rest} className={classes}>
      {isOpen ? <LuX /> : <LuMenu />}
    </button>
  )
}
