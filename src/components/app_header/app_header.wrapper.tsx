import type { HTMLAttributes } from 'react'
import { clsx } from '@/utils'

interface WrapperProps extends HTMLAttributes<HTMLElement> {}

export default function Wrapper(props: WrapperProps) {
  const classes = clsx(
    'container pointer-events-none absolute left-1/2 top-14 z-20',
    '-translate-x-1/2 pointer-coarse:top-10 [&_a]:pointer-events-auto'
  )

  return <header {...props} className={classes} />
}
