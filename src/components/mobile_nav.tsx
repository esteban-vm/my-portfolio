'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { navLinks } from '@/constants'

export default function MobileNav() {
  const [active, setActive] = useState(false)
  const toggleMenu = () => setActive(!active)

  return (
    <nav className='absolute mt-16 flex w-full items-center justify-around font-montserrat text-white md:hidden'>
      <Link className='z-10 text-2xl' href='/'>
        John Doe
      </Link>
      <div className='relative flex uppercase'>
        <button className='z-10' onClick={toggleMenu}>
          {active ? <LuX size={40} /> : <LuMenu size={40} />}
        </button>
        <div
          className={clsx(
            'absolute right-0 top-full z-10 flex select-none flex-col gap-1',
            'text-nowrap text-center text-lg font-medium animate__animated',
            active ? 'animate__backInDown' : 'animate__backOutUp'
          )}
        >
          {navLinks.map(({ title, route }) => (
            <Link key={crypto.randomUUID()} className='px-8 py-3' href={route} onClick={toggleMenu}>
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
