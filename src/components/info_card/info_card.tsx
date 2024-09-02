import type { Route } from 'next'
import { useEffect } from 'react'
import { useHomeContext } from '@/contexts'
import { StyledLink } from '@/shared'
import * as Styled from './info_card.styled'

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
    <Styled.Wrapper onPointerEnter={stop} onPointerLeave={rotate} onPointerOut={rotate} onPointerOver={stop}>
      <div className='relative'>
        <Styled.MainText>{mainText}</Styled.MainText>
        {href && (
          <StyledLink href={href}>
            <Styled.LinkContent>
              <Styled.LinkText>{linkText}</Styled.LinkText>
              <Styled.ArrowIcon aria-label={linkText} />
            </Styled.LinkContent>
          </StyledLink>
        )}
      </div>
    </Styled.Wrapper>
  )
}
