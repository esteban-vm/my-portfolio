import type { Route } from 'next'
import { useSceneContext } from '@/contexts'
import { StyledLink } from '@/shared'
import * as Styled from './info_card.styled'

interface ContentProps {
  href?: Route
  mainText: string
  linkText?: string
}

export default function Content({ href, mainText, linkText = 'Learn more…' }: ContentProps) {
  const { setIsAnimated } = useSceneContext()
  const rotateScene = () => setIsAnimated(true)
  const stopScene = () => setIsAnimated(false)

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
