'use client'

import { useId, useState } from 'react'
import { navLinks } from '@/constants'
import AppLogo from './app_logo'
import MobileButton from './mobile_button'
import NavBar from './nav_bar'
import NavLink from './nav_link'

export default function AppHeader() {
  const logoId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => setIsOpen(!isOpen)
  const closeNavBar = () => setIsOpen(false)

  return (
    <header
      aria-labelledby={logoId}
      className='container pointer-events-none absolute left-1/2 top-14 z-20 -translate-x-1/2 select-none [&_a]:pointer-events-auto'
    >
      <div className='relative flex w-full items-center justify-around'>
        <AppLogo id={logoId} onClick={closeNavBar} />
        <MobileButton isOpen={isOpen} onClick={toggleNavBar} />
        <NavBar isOpen={isOpen}>
          {navLinks.map((link) => (
            <NavLink key={link.id} onClick={closeNavBar} {...link} />
          ))}
        </NavBar>
      </div>
    </header>
  )
}
