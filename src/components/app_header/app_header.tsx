import { useId, useState } from 'react'
import { navLinks } from '@/constants'
import Logo from './app_header.logo'
import Wrapper from './app_header.wrapper'
import Navbar from './nav_bar'
import Button from './nav_bar.button'
import Link from './nav_bar.link'

export default function AppHeader() {
  const logoId = useId()
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavBar = () => setIsOpen(!isOpen)
  const closeNavBar = () => setIsOpen(false)

  return (
    <Wrapper aria-labelledby={logoId}>
      <div className='relative flex w-full items-center justify-around'>
        <Logo id={logoId} onClick={closeNavBar} />
        <Button isOpen={isOpen} onClick={toggleNavBar} />
        <Navbar isOpen={isOpen}>
          {navLinks.map((link) => (
            <Link key={link.id} onClick={closeNavBar} {...link} />
          ))}
        </Navbar>
      </div>
    </Wrapper>
  )
}
