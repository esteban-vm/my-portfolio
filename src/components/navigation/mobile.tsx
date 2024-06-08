'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { navLinks } from '@/constants'

export default function Mobile() {
  const [active, setActive] = useState(false)
  const toggleMenu = () => setActive(!active)

  return (
    <nav className='relative flex lg:hidden'>
      <button className='[&>svg]:size-10' onClick={toggleMenu}>
        {active ? <LuX /> : <LuMenu />}
      </button>
      <div
        className={clsx(
          'absolute right-0 top-[120%] flex flex-col gap-1 text-nowrap text-center font-medium animate__animated',
          active ? 'animate__backInDown' : 'animate__backOutUp motion-reduce:hidden'
        )}
      >
        {navLinks.map(({ title, route }) => (
          <Link key={title} className='px-8 py-3 font-bold' href={route} onClick={toggleMenu}>
            {title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
