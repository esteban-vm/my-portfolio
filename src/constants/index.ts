import type { LinkProps } from 'next/link'

export const models = <const>{
  car: 'cyberpunk_ghetto_delorean',
  city: 'cyberpunk_city',
  robot: 'cute_home_robot',
}

export const navLinks: Readonly<LinkProps<string>[]> = [
  { href: '/about', id: '9d1222e7-ad5f-4506-b583-2ea9cfe989d8', children: 'About Me' },
  { href: '/projects', id: '6b3e6de5-f39b-4b15-b744-9c12d7710dd8', children: 'My Projects' },
  { href: '/contact', id: 'c2a12051-a97a-4e0b-ae14-4e63098a3bb2', children: 'Contact Me' },
]
