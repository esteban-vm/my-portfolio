import { useState } from 'react'
import { LuPause, LuPlay } from 'react-icons/lu'
import { spFlag, ukFlag } from '@/images'
import { FlagImage, IconWrapper, InnerWrapper, LanguageSwitch, MusicButton, Wrapper } from './app_footer.styled'

export default function AppFooter() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  return (
    <Wrapper>
      <MusicButton type='button' onClick={() => setIsPlayingMusic(!isPlayingMusic)}>
        <IconWrapper>{isPlayingMusic ? <LuPause aria-label='Pause' /> : <LuPlay aria-label='Play' />}</IconWrapper>
      </MusicButton>

      <InnerWrapper>
        <FlagImage alt='Spain flag' src={spFlag} />
        &nbsp;
        <LanguageSwitch type='checkbox' />
        &nbsp;
        <FlagImage alt='UK flag' src={ukFlag} />
      </InnerWrapper>
    </Wrapper>
  )
}
