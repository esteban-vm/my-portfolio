import { navLinks } from '@/constants'
import AppLogo from './app_logo'
import NavBar from './nav_bar'
import NavLink from './nav_link'

export default function AppHeader() {
  return (
    <header className='container pointer-events-none absolute left-1/2 top-16 z-10 flex -translate-x-1/2 select-none items-center justify-around text-white pointer-coarse:portrait:top-11 pointer-coarse:landscape:top-8 [&_a]:pointer-events-auto'>
      <AppLogo />
      <NavBar>
        {navLinks.map((link) => (
          <NavLink key={crypto.randomUUID()} {...link} />
        ))}
      </NavBar>
    </header>
  )
}
