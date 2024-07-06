import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { clsx } from '@/utils'

export default function Link<T extends string>(props: LinkProps<T>) {
  const classes = clsx(
    'absolute left-1/2 top-full w-[90%] -translate-x-1/2 rounded-md',
    'bg-black/60 font-bold text-neon-green-darker shadow-md',
    'transition-all ~px-2/4 ~py-1/3 link-shadow hover:opacity-95 active:scale-90'
  )

  return <NextLink {...props} className={classes} />
}
