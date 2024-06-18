'use client'

import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-device-sizes'
import { LuMenu, LuX } from 'react-icons/lu'
import { clsx } from '@/utils'

export default function NavBar({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false)
  const isMediumDevice = useMediaQuery({ maxWidth: 1_023 })
  const toggleMenu = () => setIsActive(!isActive)

  useEffect(() => {
    if (isMediumDevice) {
      const closeMenu = () => setIsActive(false)
      const links = document.querySelectorAll('a[data-navigation]')
      links.forEach((link) => link.addEventListener('click', closeMenu))
      return () => links.forEach((link) => link.removeEventListener('click', closeMenu))
    }
  }, [isMediumDevice])

  return (
    <>
      <button
        className='pointer-events-auto flex items-center justify-center text-neon-yellow lg:hidden [&>svg]:size-8 active:[&>svg]:scale-90 md:[&>svg]:size-10'
        onClick={toggleMenu}
      >
        {isActive ? <LuX /> : <LuMenu />}
      </button>
      <nav
        className={clsx(
          'absolute right-0 flex w-full flex-col items-center justify-around text-nowrap text-center animate__animated nav-h md:nav-h-md lg:static lg:size-auto lg:animate-none lg:flex-row lg:gap-8',
          isActive ? 'top-[150%] bg-black/50 animate__backInDown' : 'animate__backOutUp'
        )}
      >
        {children}
      </nav>
    </>
  )
}
