import type { HTMLAttributes } from 'react'
import Link from 'next/link'
import { clsx } from '@/utils'

interface LogoProps extends HTMLAttributes<HTMLHeadingElement> {}

export default function Logo(props: LogoProps) {
  const classes = clsx(
    'animate-glitch text-wrap text-center font-saiba45',
    'text-neon-yellow ~text-4xl/7xl logo-shadow hover:animate-none'
  )

  return (
    <h1 {...props}>
      <Link className={classes} href='/'>
        Esteban
        <span className='hidden font-saiba45 md:inline'>&nbsp;V.M.</span>
      </Link>
    </h1>
  )
}
