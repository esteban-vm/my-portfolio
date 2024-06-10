'use client'

import type { NavLink as INavLink } from '@/types'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLink({ title, route }: INavLink) {
  const pathname = usePathname()

  return (
    <Link
      href={route}
      className={clsx(
        'px-8 py-3 font-montserrat font-bold uppercase decoration-wavy underline-offset-4 transition-all hover:underline hover:opacity-80 active:scale-95 lg:p-0',
        pathname === route && 'text-brand'
      )}
    >
      {title}
    </Link>
  )
}
