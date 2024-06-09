'use client'

import type { NavLink as INavLink } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends INavLink {
  className: string
}

export default function NavLink({ title, route, className }: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      className={clsx(className, 'font-bold transition-all active:scale-95', pathname === route && 'text-brand')}
      href={route}
    >
      {title}
    </Link>
  )
}
