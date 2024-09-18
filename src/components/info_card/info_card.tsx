import type { Route } from 'next'
import { useEffect } from 'react'
import { useHomeContext } from '@/contexts'
import { StyledLink } from '@/shared'
import * as $ from './info_card.styled'

interface InfoCardProps {
  href?: Route
  mainText: string
  linkText?: string
}

export default function InfoCard({ href, mainText, linkText = 'Learn more…' }: InfoCardProps) {
  const {
    scene: { rotate, stop },
  } = useHomeContext()

  useEffect(() => rotate, [rotate])

  return (
    <$.Wrapper onPointerEnter={stop} onPointerLeave={rotate} onPointerOut={rotate} onPointerOver={stop}>
      <div className='relative'>
        <$.MainText>{mainText}</$.MainText>

        {href && (
          <StyledLink href={href}>
            <$.LinkContent>
              <$.LinkText>{linkText}</$.LinkText>
              <$.ArrowIcon aria-label={linkText} />
            </$.LinkContent>
          </StyledLink>
        )}
      </div>
    </$.Wrapper>
  )
}
