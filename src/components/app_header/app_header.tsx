import { useId, useState } from 'react'
import { navLinks } from '@/constants'
import AppLogo from './app_logo'
import HeaderWrapper from './header_wrapper'
import MobileButton from './mobile_button'
import NavBar from './nav_bar'
import NavLink from './nav_link'

export default function AppHeader() {
  const logoId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => setIsOpen(!isOpen)
  const closeNavBar = () => setIsOpen(false)

  return (
    <HeaderWrapper aria-labelledby={logoId}>
      <div className='relative flex w-full items-center justify-around'>
        <AppLogo id={logoId} onClick={closeNavBar} />
        <MobileButton isOpen={isOpen} onClick={toggleNavBar} />
        <NavBar isOpen={isOpen}>
          {navLinks.map((link) => (
            <NavLink key={link.id} onClick={closeNavBar} {...link} />
          ))}
        </NavBar>
      </div>
    </HeaderWrapper>
  )
}
