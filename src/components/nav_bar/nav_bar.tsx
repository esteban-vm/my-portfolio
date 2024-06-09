import AppLogo from './app_logo'
import DesktopNav from './desktop_nav'
import MobileNav from './mobile_nav'

export default function NavBar() {
  return (
    <header className='container pointer-events-none absolute left-1/2 top-16 z-10 flex -translate-x-1/2 select-none items-center justify-around font-montserrat uppercase text-white pointer-coarse:portrait:top-11 pointer-coarse:landscape:top-8 [&_a]:pointer-events-auto [&_button]:pointer-events-auto'>
      <AppLogo />
      <DesktopNav />
      <MobileNav />
    </header>
  )
}
