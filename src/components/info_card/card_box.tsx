import type { Route } from 'next'
import CardLink from './card_link'
import CardWrapper from './card_wrapper'

interface CardItemProps {
  href?: Route
  mainText: string
  linkText?: string
}

export default function CardBox({ href, mainText, linkText = 'Go' }: CardItemProps) {
  return (
    <CardWrapper>
      <div className='relative'>
        <p className='line-clamp-3 text-pretty'>{mainText}</p>
        {href && <CardLink href={href}>{linkText}</CardLink>}
      </div>
    </CardWrapper>
  )
}
