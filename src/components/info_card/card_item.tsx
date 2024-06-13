import type { Route } from 'next'
import Link from 'next/link'

interface CardItemProps {
  route: Route
  mainText: string
  linkText: string
}

export default function CardItem({ route, mainText, linkText }: CardItemProps) {
  return (
    <div>
      <span>{mainText}</span>
      <Link href={route}>{linkText}</Link>
    </div>
  )
}
