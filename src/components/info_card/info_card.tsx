import type { CurrentStage } from '@/types'
import { useSceneContext } from '@/contexts'
import CardItem from './card_item'

const content: Record<Exclude<CurrentStage, null>, JSX.Element> = {
  1: <div></div>,
  2: (
    <CardItem
      linkText='Learn more'
      mainText='Worked with many companies and picked up many skills along the way'
      route='/about'
    />
  ),
  3: (
    <CardItem
      linkText='My portfolio'
      mainText='Led multiple projects to success over the years. Curious about the impact?'
      route='/projects'
    />
  ),
  4: (
    <CardItem
      linkText="Let's talk"
      mainText="Need a project done or looking for a dev? I 'm just a few keystrokes away"
      route='/contact'
    />
  ),
}

export default function InfoCard() {
  const { currentStage, setIsAnimated } = useSceneContext()
  const rotate = () => setIsAnimated(true)
  const stop = () => setIsAnimated(false)

  return (
    currentStage && (
      <div onPointerEnter={stop} onPointerLeave={rotate} onPointerOut={rotate} onPointerOver={stop}>
        {content[currentStage]}
      </div>
    )
  )
}
