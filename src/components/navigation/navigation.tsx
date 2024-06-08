import Link from 'next/link'
import Desktop from './desktop'
import Mobile from './mobile'

export default function Navigation() {
  return (
    <header className='container pointer-events-none absolute left-1/2 top-16 z-10 flex -translate-x-1/2 select-none items-center justify-around font-montserrat uppercase text-white pointer-coarse:portrait:top-11 pointer-coarse:landscape:top-8 [&_a]:pointer-events-auto [&_button]:pointer-events-auto'>
      <Link
        className='z-20 animate-glitch text-center font-saiba45 text-5xl text-cyber logo-shadow hover:animate-none md:text-6xl lg:text-7xl'
        href='/'
      >
        Esteban
        <span className='hidden md:inline'>&nbsp;</span>
        <br className='md:hidden' />
        V.M.
      </Link>
      <Desktop />
      <Mobile />
    </header>
  )
}
