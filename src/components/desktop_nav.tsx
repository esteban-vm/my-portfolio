import Link from 'next/link'
import { navLinks } from '@/constants'

export default function DesktopNav() {
  return (
    <nav className='absolute mt-16 hidden w-full items-center justify-around font-montserrat text-white md:flex'>
      <Link className='z-10 text-2xl' href='/'>
        John Doe
      </Link>
      <div className='flex select-none gap-8 text-lg font-medium uppercase'>
        {navLinks.map(({ title, route }) => (
          <Link
            key={title}
            className='z-10 decoration-gray-700 decoration-wavy underline-offset-4 transition-all hover:underline hover:opacity-80'
            href={route}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  )
}
