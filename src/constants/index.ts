import type { LinkProps } from 'next/link'

export const navLinks: LinkProps<string>[] = [
  { href: '/about', id: crypto.randomUUID(), children: 'About Me' },
  { href: '/projects', id: crypto.randomUUID(), children: 'My Projects' },
  { href: '/contact', id: crypto.randomUUID(), children: 'Contact Me' },
]

export const models = <const>{
  car: 'cyberpunk_ghetto_delorean',
  city: 'cyberpunk_city',
  robot: 'cute_home_robot',
}
