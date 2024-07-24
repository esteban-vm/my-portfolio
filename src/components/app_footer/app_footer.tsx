import { useState } from 'react'
import { LuPause, LuPlay } from 'react-icons/lu'
import Spain from '@/images/Spain_flag.png'
import UK from '@/images/UK_flag.png'
import * as Styled from './app_footer.styled'

export default function AppFooter() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  return (
    <Styled.Wrapper>
      <Styled.MusicButton type='button' onClick={() => setIsPlayingMusic(!isPlayingMusic)}>
        <Styled.IconWrapper>
          {isPlayingMusic ? <LuPause aria-label='Pause' /> : <LuPlay aria-label='Play' />}
        </Styled.IconWrapper>
      </Styled.MusicButton>

      <Styled.InnerWrapper>
        <Styled.FlagImage alt='Spain flag' src={Spain} />
        &nbsp;
        <Styled.LanguageSwitch type='checkbox' />
        &nbsp;
        <Styled.FlagImage alt='UK flag' src={UK} />
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  )
}
