import { useState } from 'react'
import { LuPause, LuPlay } from 'react-icons/lu'
import Spain from '@/images/Spain.png'
import UnitedKingdom from '@/images/UnitedKingdom.png'
import * as Styled from './app_footer.styled'

export default function AppFooter() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  return (
    <Styled.Wrapper>
      <Styled.MusicButton
        title={isPlayingMusic ? 'Pause' : 'Play'}
        type='button'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
      >
        {isPlayingMusic ? <LuPause aria-label='Pause' /> : <LuPlay aria-label='Play' />}
      </Styled.MusicButton>

      <Styled.InnerWrapper>
        <Styled.FlagImage alt='Spain' src={Spain} />
        &nbsp;
        <Styled.LanguageSwitch type='checkbox' />
        &nbsp;
        <Styled.FlagImage alt='United Kingdom' src={UnitedKingdom} />
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  )
}
