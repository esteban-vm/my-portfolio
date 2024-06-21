import type { Route } from 'next'
import AppLogo from './app_logo'
import NavBar from './nav_bar'
import NavLink from './nav_link'

export default function AppHeader() {
  return (
    <header
      aria-labelledby='app_logo'
      className='container pointer-events-none absolute left-1/2 top-14 z-20 -translate-x-1/2 select-none [&_a]:pointer-events-auto'
    >
      <div className='relative flex w-full items-center justify-around'>
        <AppLogo />
        <NavBar>
          {navLinks.map(({ text, ...rest }) => (
            <NavLink key={crypto.randomUUID()} {...rest}>
              {text}
            </NavLink>
          ))}
        </NavBar>
      </div>
    </header>
  )
}

const navLinks: { text: string; href: Route }[] = [
  { text: 'About Me', href: '/about' },
  { text: 'My Projects', href: '/projects' },
  { text: 'Contact Me', href: '/contact' },
]
