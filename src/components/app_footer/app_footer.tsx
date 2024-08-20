import { useState } from 'react'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import Spain from '@/images/Spain.png'
import UnitedKingdom from '@/images/UnitedKingdom.png'
import * as Styled from './app_footer.styled'

export default function AppFooter() {
  const [musicOn, setMusicOn] = useState(false)

  const musicOnLbl = 'Music on'
  const musicOffLbl = 'Music off'

  return (
    <Styled.Wrapper>
      <Styled.MusicButton title={musicOn ? musicOffLbl : musicOnLbl} type='button' onClick={() => setMusicOn(!musicOn)}>
        {musicOn ? <TbMusicOff aria-label={musicOffLbl} /> : <TbMusic aria-label={musicOnLbl} />}
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
