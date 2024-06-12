'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-device-sizes'
import { LuMenu, LuX } from 'react-icons/lu'

export default function NavBar({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false)
  const isMediumDevice = useMediaQuery({ query: '(max-width: 1023px), (pointer: coarse)' })
  const toggleMenu = () => setActive(!active)

  useEffect(() => {
    if (isMediumDevice) {
      const closeMenu = () => setActive(false)
      const links = document.querySelectorAll('a[data-navigation]')
      links.forEach((link) => link.addEventListener('click', closeMenu))
      return () => links.forEach((link) => link.removeEventListener('click', closeMenu))
    }
  }, [isMediumDevice])

  return (
    <>
      <button
        className='pointer-events-auto flex items-center justify-center text-cyber lg:hidden [&>svg]:size-8 active:[&>svg]:scale-90 md:[&>svg]:size-10'
        onClick={toggleMenu}
      >
        {active ? <LuX /> : <LuMenu />}
      </button>
      <nav
        className={clsx(
          'absolute right-0 z-10 flex w-full flex-col items-center justify-around text-nowrap bg-black/50 text-center shadow-inner animate__animated nav-h md:nav-h-md lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8 lg:bg-transparent',
          active ? 'top-[150%] animate__backInDown' : 'top-0 animate__backOutUp'
        )}
      >
        {children}
      </nav>
    </>
  )
}
