import type { ButtonHTMLAttributes } from 'react'
import { LuPlay, LuPause } from 'react-icons/lu'
import { clsx } from '@/utils'

interface MusicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPlaying: boolean
}

export default function MusicButton({ isPlaying, ...rest }: MusicButtonProps) {
  const classes = clsx('pointer-events-auto flex items-center', 'justify-center rounded-full bg-orange-500 ~size-8/12')

  return (
    <button {...rest} className={classes}>
      {isPlaying ? <LuPause /> : <LuPlay />}
    </button>
  )
}
