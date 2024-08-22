import { useEffect, useRef, useState } from 'react'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import Spain from '@/images/Spain.png'
import UnitedKingdom from '@/images/UnitedKingdom.png'
import * as Styled from './app_footer.styled'

export default function AppFooter() {
  const audioRef = useRef<HTMLAudioElement>(null!)
  const [musicOn, setMusicOn] = useState(false)

  const musicOnLbl = 'Music on'
  const musicOffLbl = 'Music off'

  useEffect(() => {
    audioRef.current.volume = 0.2
  }, [])

  useEffect(() => {
    if (musicOn) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [musicOn])

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

      <audio ref={audioRef} loop>
        <track kind='captions' />
        {/* 
          Music from #Uppbeat (free for Creators!):
          https://uppbeat.io/t/aavirall/cosmic-love
        */}
        <source src='/audios/cosmic-love.mp3' type='audio/mpeg' />
        <code>audio</code> not supported
      </audio>
    </Styled.Wrapper>
  )
}
