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
        'relative inline-block font-montserrat font-bold uppercase text-cyber after:bottom-0 after:left-0 after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-cyber after:transition-transform after:duration-200 after:ease-out after:content-[""] hover:opacity-90 hover:after:origin-bottom-left hover:after:scale-x-100 active:scale-95 lg:p-0 lg:after:absolute',
        pathname === route && '!text-brand2 after:!bg-brand2'
      )}
    >
      {title}
    </Link>
  )
}
