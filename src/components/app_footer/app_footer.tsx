import { useState } from 'react'
import { LuPause, LuPlay } from 'react-icons/lu'
import { spFlag, ukFlag } from '@/images'
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
        <Styled.FlagImage alt='Spain flag' src={spFlag} />
        &nbsp;
        <Styled.LanguageSwitch type='checkbox' />
        &nbsp;
        <Styled.FlagImage alt='UK flag' src={ukFlag} />
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  )
}
