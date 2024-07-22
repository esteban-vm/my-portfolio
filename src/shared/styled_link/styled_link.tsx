import type { LinkProps } from 'next/link'
import Link from 'next/link'

export default function StyledLink<T extends string>(props: LinkProps<T>) {
  return <Link {...props} legacyBehavior passHref />
}
