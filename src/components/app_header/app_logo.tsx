import Link from 'next/link'

export default function AppLogo() {
  return (
    <Link href='/' id='app_logo' data-navigation>
      <h1 className='animate-glitch text-wrap text-center font-saiba45 text-5xl text-cyber logo-shadow hover:animate-none md:text-6xl lg:text-7xl'>
        Esteban
        <span className='hidden font-saiba45 md:inline'>&nbsp;V.M.</span>
      </h1>
    </Link>
  )
}
