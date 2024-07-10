import type { HTMLAttributes } from 'react'
import { clsx } from '@/utils'

interface WrapperProps extends HTMLAttributes<HTMLElement> {}

export default function Wrapper(props: WrapperProps) {
  const classes = clsx(
    'container pointer-events-none absolute left-1/2 top-3 z-30 flex h-[11vh]',
    '-translate-x-1/2 md:h-[12vh] lg:h-[13vh] [&_a]:pointer-events-auto'
  )

  return <header {...props} className={classes} />
}
