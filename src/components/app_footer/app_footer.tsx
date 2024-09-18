import { useEffect, useRef, useState } from 'react'
import { TbMusic, TbMusicOff } from 'react-icons/tb'
import { Spain, UK } from '@/svgs'
import * as $ from './app_footer.styled'

export default function AppFooter() {
  const audioRef = useRef<HTMLAudioElement>(null!)
  const [musicOn, setMusicOn] = useState(false)
  const [language, setLanguage] = useState<'English' | 'Spanish'>('Spanish')

  const musicOnLbl = 'Music on'
  const musicOffLbl = 'Music off'

  const toggleMusic = () => setMusicOn(!musicOn)
  const toggleLang = () => setLanguage(language === 'English' ? 'Spanish' : 'English')

  useEffect(() => {
    /*
      Music from #Uppbeat (free for Creators!):
      https://uppbeat.io/t/aavirall/cosmic-love
    */
    audioRef.current = new Audio('/audios/cosmic-love.mp3')
    audioRef.current.loop = true
    audioRef.current.volume = 0.2
    audioRef.current.preload = 'auto'
  }, [])

  useEffect(() => {
    audioRef.current.load()

    if (musicOn) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [musicOn])

  return (
    <$.Wrapper>
      <$.Button title={musicOn ? musicOffLbl : musicOnLbl} type='button' onClick={toggleMusic}>
        {musicOn ? <TbMusicOff aria-label={musicOffLbl} /> : <TbMusic aria-label={musicOnLbl} />}
      </$.Button>

      <$.Button title={`Switch to ${language}`} type='button' onClick={toggleLang}>
        {language === 'English' ? <UK aria-label='UK flag' /> : <Spain aria-label='Spain Flag' />}
      </$.Button>
    </$.Wrapper>
  )
}
