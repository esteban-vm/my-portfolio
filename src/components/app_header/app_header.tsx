import { usePathname } from 'next/navigation'
import { useId, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { NavLinks } from '@/constants'
import { StyledLink } from '@/shared'
import * as Styled from './app_header.styled'

export default function AppHeader() {
  const logoId = useId()
  const currentPathname = usePathname()
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  const toggleNavBar = () => setIsNavBarOpen(!isNavBarOpen)
  const closeNavBar = () => setIsNavBarOpen(false)

  return (
    <Styled.Wrapper aria-labelledby={logoId}>
      <Styled.InnerWrapper>
        <h1 id={logoId}>
          <StyledLink href='/'>
            <Styled.NameLogo onClick={closeNavBar}>
              Esteban
              <Styled.LastName>&nbsp;V.M.</Styled.LastName>
            </Styled.NameLogo>
          </StyledLink>
        </h1>

        <Styled.MobileButton type='button' onClick={toggleNavBar}>
          {isNavBarOpen ? <LuX aria-label='Close Menu' /> : <LuMenu aria-label='Open Menu' />}
        </Styled.MobileButton>

        <Styled.NavBar $isOpen={isNavBarOpen}>
          {NavLinks.map(({ href, id, ...rest }) => (
            <StyledLink key={id} href={href}>
              <Styled.NavItem $isActive={currentPathname === href} id={id} onClick={closeNavBar} {...rest} />
            </StyledLink>
          ))}
        </Styled.NavBar>
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  )
}
