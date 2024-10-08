import { usePathname } from 'next/navigation'
import { useId, useState } from 'react'
import { LuMenu, LuX } from 'react-icons/lu'
import { NavLinks } from '@/constants'
import { StyledLink } from '@/shared'
import * as $ from './app_header.styled'

export default function AppHeader() {
  const logoId = useId()
  const currentPathname = usePathname()
  const [isNavBarOpen, setIsNavBarOpen] = useState(false)

  const toggleNavBar = () => setIsNavBarOpen(!isNavBarOpen)
  const closeNavBar = () => setIsNavBarOpen(false)

  return (
    <$.Wrapper aria-labelledby={logoId}>
      <$.InnerWrapper>
        <h1 id={logoId}>
          <StyledLink href='/'>
            <$.NameLogo onClick={closeNavBar}>
              Esteban
              <$.LastName>&nbsp;V.M.</$.LastName>
            </$.NameLogo>
          </StyledLink>
        </h1>

        <$.MobileButton type='button' onClick={toggleNavBar}>
          {isNavBarOpen ? <LuX aria-label='Close Menu' /> : <LuMenu aria-label='Open Menu' />}
        </$.MobileButton>

        <$.NavBar $isOpen={isNavBarOpen}>
          {NavLinks.map(({ href, id, text, ...rest }) => (
            <StyledLink key={id} href={href}>
              <$.NavItem $isActive={currentPathname === href} id={id} onClick={closeNavBar} {...rest}>
                {text}
              </$.NavItem>
            </StyledLink>
          ))}
        </$.NavBar>
      </$.InnerWrapper>
    </$.Wrapper>
  )
}
