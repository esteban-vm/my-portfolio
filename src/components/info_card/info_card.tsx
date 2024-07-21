import type { Route } from 'next'
import { useEffect } from 'react'
import { useSceneContext } from '@/contexts'
import { StyledLink } from '@/shared'
import * as Styled from './info_card.styled'

interface InfoCardProps {
  href?: Route
  mainText: string
  linkText?: string
}

export default function InfoCard({ href, mainText, linkText = 'Learn more…' }: InfoCardProps) {
  const { rotateScene, stopScene } = useSceneContext()

  useEffect(() => rotateScene, [rotateScene])

  return (
    <Styled.Wrapper
      onPointerEnter={stopScene}
      onPointerLeave={rotateScene}
      onPointerOut={rotateScene}
      onPointerOver={stopScene}
    >
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
