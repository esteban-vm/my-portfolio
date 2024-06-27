import type { LinkProps } from 'next/link'
import Link from 'next/link'

export default function CardLink<T extends string>(props: LinkProps<T>) {
  return (
    <Link
      {...props}
      className='absolute left-1/2 top-full -translate-x-1/2 rounded-md bg-neon-green-darker px-4 py-3'
    />
  )
}
