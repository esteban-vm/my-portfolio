'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

export default function NavBar({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false)
  const linksRef = useRef<HTMLElement>(null!)
  const toggleMenu = () => setActive(!active)

  useEffect(() => {
    const closeMenu = () => setActive(false)
    const links = linksRef.current.querySelectorAll('a')
    links.forEach((link) => link.addEventListener('click', closeMenu))
    return () => links.forEach((link) => link.removeEventListener('click', closeMenu))
  }, [])

  return (
    <>
      <button className='pointer-events-auto lg:hidden [&>svg]:size-10' onClick={toggleMenu}>
        {active ? <LuX /> : <LuMenu />}
      </button>
      <nav
        ref={linksRef}
        className={clsx(
          'absolute right-0 top-[120%] flex flex-col gap-1 text-nowrap text-center animate__animated lg:relative lg:animate-none lg:flex-row lg:gap-8',
          active ? 'animate__backInDown' : 'animate__backOutUp'
        )}
      >
        {children}
      </nav>
    </>
  )
}
