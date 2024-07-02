import type { LinkProps } from 'next/link'
import { nanoid } from 'nanoid'

export const navLinks: LinkProps<string>[] = [
  { href: '/about', id: nanoid(), children: 'About Me' },
  { href: '/projects', id: nanoid(), children: 'My Projects' },
  { href: '/contact', id: nanoid(), children: 'Contact Me' },
]

export const models = <const>{
  car: 'cyberpunk_ghetto_delorean',
  city: 'cyberpunk_city',
  robot: 'cute_home_robot',
}
