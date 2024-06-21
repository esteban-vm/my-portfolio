'use client'

import type { LinkProps } from 'next/link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from '@/utils'

export default function NavLink<T extends string>({ href, ...rest }: LinkProps<T>) {
  const pathname = usePathname()

  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        'relative inline-block font-bold uppercase text-neon-yellow after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neon-yellow after:transition-transform after:duration-200 after:ease-out after:content-[""] hover:opacity-90 hover:after:origin-bottom-left hover:after:scale-x-100 active:scale-95 lg:p-0 lg:after:absolute',
        pathname === href && '!text-neon-green-dark after:!bg-neon-green-dark'
      )}
      data-navigation
    />
  )
}
