import { navLinks } from '@/constants'
import NavLink from './nav_link'

export default function DesktopNav() {
  return (
    <nav className='hidden gap-8 text-lg lg:flex'>
      {navLinks.map((link) => (
        <NavLink
          key={crypto.randomUUID()}
          className='decoration-wavy underline-offset-4 hover:underline hover:opacity-80'
          {...link}
        />
      ))}
    </nav>
  )
}
