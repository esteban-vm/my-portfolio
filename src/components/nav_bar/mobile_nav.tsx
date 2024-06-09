import { navLinks } from '@/constants'
import NavLink from './nav_link'
import NavMenu from './nav_menu'

export default function MobileNav() {
  return (
    <nav className='relative flex lg:hidden'>
      <NavMenu>
        {navLinks.map((link) => (
          <NavLink key={crypto.randomUUID()} className='px-8 py-3' {...link} />
        ))}
      </NavMenu>
    </nav>
  )
}
