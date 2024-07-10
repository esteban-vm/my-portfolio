import type { HTMLAttributes } from 'react'
import { clsx } from '@/utils'

interface WrapperProps extends HTMLAttributes<HTMLElement> {}

export default function Wrapper(props: WrapperProps) {
  const classes = clsx(
    'container pointer-events-none absolute bottom-3 left-1/2 z-20',
    'flex -translate-x-1/2 items-center justify-around text-white'
  )

  return <footer {...props} className={classes} />
}
