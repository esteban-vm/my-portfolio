import { navLinks } from '@/constants'
import AppLogo from './app_logo'
import NavBar from './nav_bar'
import NavLink from './nav_link'

export default function AppHeader() {
  return (
    <header
      aria-labelledby='app_logo'
      className='container pointer-events-none absolute left-1/2 top-14 z-10 -translate-x-1/2 select-none [&_a]:pointer-events-auto'
    >
      <div className='relative flex w-full items-center justify-around'>
        <AppLogo />
        <NavBar>
          {navLinks.map((link) => (
            <NavLink key={crypto.randomUUID()} {...link} />
          ))}
        </NavBar>
      </div>
    </header>
  )
}
