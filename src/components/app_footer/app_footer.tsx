import Wrapper from './app_footer.wrapper'
import LanguageSwitcher from './language_switcher'
import MusicButton from './music_button'

export default function AppFooter() {
  return (
    <Wrapper>
      <MusicButton isPlaying={false} />
      <LanguageSwitcher />
    </Wrapper>
  )
}
