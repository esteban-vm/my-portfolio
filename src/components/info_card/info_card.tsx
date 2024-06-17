import type { CurrentStage } from '@/types'
import { useSceneContext } from '@/contexts'
import CardItem from './card_item'

const content: Record<NonNullable<CurrentStage>, JSX.Element> = {
  1: <CardItem mainText='Stage 1' />,
  2: <CardItem mainText='Stage 2' route='/about' />,
  3: <CardItem mainText='Stage 3' route='/projects' />,
  4: <CardItem mainText='Stage 4' route='/contact' />,
}

export default function InfoCard() {
  const { currentStage } = useSceneContext()
  return currentStage && content[currentStage]
}
