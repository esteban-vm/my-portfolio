import type { Route } from 'next'
import Link from './info_card.link'
import Wrapper from './info_card.wrapper'

interface ContentProps {
  href?: Route
  mainText: string
  linkText?: string
}

export default function Content({ href, mainText, linkText = 'Go' }: ContentProps) {
  return (
    <Wrapper>
      <div className='relative'>
        <p className='line-clamp-3 text-pretty'>{mainText}</p>
        {href && <Link href={href}>{linkText}</Link>}
      </div>
    </Wrapper>
  )
}
