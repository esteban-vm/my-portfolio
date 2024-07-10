import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { clsx } from '@/utils'

export default function Link<T extends string>({ href, ...rest }: LinkProps<T>) {
  const pathname = usePathname()

  const className = clsx(
    'relative inline-block font-bold uppercase text-neon-yellow ~text-sm/base after:bottom-0 after:left-0',
    'after:h-1 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neon-yellow',
    'after:transition-transform after:duration-200 after:ease-out after:content-[""] hover:opacity-90',
    'hover:after:origin-bottom-left hover:after:scale-x-100 active:scale-95 lg:after:absolute',
    pathname === href && '!text-neon-green-dark after:!bg-neon-green-dark'
  )

  return <NextLink {...rest} className={className} href={href} />
}
