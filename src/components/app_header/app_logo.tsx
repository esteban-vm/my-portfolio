import Link from 'next/link'

export default function AppLogo() {
  return (
    <Link href='/' data-navigation>
      <h1
        className='animate-glitch text-wrap text-center font-saiba45 text-5xl text-neon-yellow logo-shadow hover:animate-none md:text-6xl lg:text-7xl'
        id='app_logo'
      >
        Esteban
        <span className='hidden font-saiba45 md:inline'>&nbsp;V.M.</span>
      </h1>
    </Link>
  )
}
