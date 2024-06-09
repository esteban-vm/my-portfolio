'use client'

import type { ReactNode } from 'react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'

export default function NavMenu({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false)
  const linksRef = useRef<HTMLDivElement>(null!)
  const toggleMenu = () => setActive(!active)
  const closeMenu = () => setActive(false)

  useEffect(() => {
    const links = linksRef.current.querySelectorAll('a')
    links.forEach((link) => link.addEventListener('click', closeMenu))
    return () => links.forEach((link) => link.removeEventListener('click', closeMenu))
  }, [])

  return (
    <>
      <button className='[&>svg]:size-10' onClick={toggleMenu}>
        {active ? <LuX /> : <LuMenu />}
      </button>
      <div
        ref={linksRef}
        className={clsx(
          'absolute right-0 top-[120%] flex flex-col gap-1 text-nowrap text-center font-medium animate__animated',
          active ? 'animate__backInDown' : 'animate__backOutUp motion-reduce:hidden'
        )}
      >
        {children}
      </div>
    </>
  )
}
