'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-device-sizes'
import { LuMenu, LuX } from 'react-icons/lu'

export default function NavBar({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false)
  const linksRef = useRef<HTMLElement>(null!)
  const isMediumDevice = useMediaQuery({ query: '(max-width: 1023px), (pointer: coarse)' })
  const toggleMenu = () => setActive(!active)

  useEffect(() => {
    if (isMediumDevice) {
      const closeMenu = () => setActive(false)
      const links = linksRef.current.querySelectorAll('a')
      links.forEach((link) => link.addEventListener('click', closeMenu))
      return () => links.forEach((link) => link.removeEventListener('click', closeMenu))
    }
  }, [isMediumDevice])

  return (
    <div className='relative border border-white'>
      <button
        className='pointer-events-auto flex items-center justify-center text-cyber lg:hidden [&>svg]:size-10'
        onClick={toggleMenu}
      >
        {active ? <LuX /> : <LuMenu />}
      </button>
      <nav
        ref={linksRef}
        className={clsx(
          'absolute right-0 top-full z-10 flex flex-col gap-2 text-nowrap border border-white px-5 py-2 text-center animate__animated lg:static lg:animate-none lg:flex-row lg:gap-8 lg:p-0',
          active ? 'animate__backInDown' : 'animate__backOutUp'
        )}
      >
        {children}
      </nav>
    </div>
  )
}
