import type { Route } from 'next'
import { useSceneContext } from '@/contexts'
import { AppLink } from '@/shared'
import { ArrowIcon, LinkContent, LinkText, MainText, Wrapper } from './info_card.styled'

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
    <Wrapper
      onPointerEnter={stopScene}
      onPointerLeave={rotateScene}
      onPointerOut={rotateScene}
      onPointerOver={stopScene}
    >
      <div>
        <MainText>{mainText}</MainText>

        {href && (
          <AppLink href={href}>
            <LinkContent>
              <LinkText>{linkText}</LinkText>
              <ArrowIcon aria-label={linkText} />
            </LinkContent>
          </AppLink>
        )}
      </div>
    </Wrapper>
  )
}
