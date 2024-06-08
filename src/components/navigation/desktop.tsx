import Link from 'next/link'
import { navLinks } from '@/constants'

export default function Desktop() {
  return (
    <nav className='hidden gap-8 text-lg font-medium lg:flex'>
      {navLinks.map(({ title, route }) => (
        <Link
          key={title}
          className='font-bold decoration-wavy underline-offset-4 transition-all hover:underline hover:opacity-80'
          href={route}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}
