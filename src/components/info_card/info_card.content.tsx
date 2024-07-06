import type { Route } from 'next'
import { LuArrowBigRight } from 'react-icons/lu'
import Link from './info_card.link'
import Wrapper from './info_card.wrapper'

interface ContentProps {
  href?: Route
  mainText: string
  linkText?: string
}

export default function Content({ href, mainText, linkText = 'Learn more…' }: ContentProps) {
  return (
    <Wrapper>
      <div className='relative'>
        <p className='line-clamp-3 text-pretty ~text-sm/base'>{mainText}</p>
        {href && (
          <Link href={href}>
            <span className='inline text-pretty align-middle ~text-xs/sm'>{linkText}</span>
            <LuArrowBigRight aria-label={linkText} className='inline ~size-4/5' />
          </Link>
        )}
      </div>
    </Wrapper>
  )
}
