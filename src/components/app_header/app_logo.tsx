import Link from 'next/link'

export default function AppLogo() {
  return (
    <Link
      className='animate-glitch text-wrap border border-white text-center font-saiba45 text-5xl text-cyber logo-shadow hover:animate-none md:text-6xl lg:text-7xl'
      href='/'
    >
      Esteban
      <span className='hidden md:inline'>&nbsp;</span>
      <br className='md:hidden' />
      V.M.
    </Link>
  )
}
