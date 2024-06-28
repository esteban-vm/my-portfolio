import type { CurrentStage } from '@/types'
import { useSceneContext } from '@/contexts'
import Content from './info_card.content'

const content: Record<NonNullable<CurrentStage>, JSX.Element> = {
  1: (
    <Content mainText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim vitae lacus vitae porttitor. Proin nunc arcu, facilisis in nibh sit amet, molestie efficitur dui. Sed rhoncus vulputate neque a ultricies. Maecenas molestie libero id mi fermentum malesuada.' />
  ),
  2: <Content href='/about' mainText='Stage 2' />,
  3: <Content href='/projects' mainText='Stage 3' />,
  4: <Content href='/contact' mainText='Stage 4' />,
}

export default function InfoCard() {
  const { currentStage } = useSceneContext()
  return currentStage && content[currentStage]
}
