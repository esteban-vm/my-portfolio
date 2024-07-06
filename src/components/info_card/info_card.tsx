import type { CurrentStage } from '@/types'
import { useSceneContext } from '@/contexts'
import Content from './info_card.content'

const content: Record<NonNullable<CurrentStage>, JSX.Element> = {
  1: (
    <Content mainText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim vitae lacus vitae porttitor. Proin nunc arcu, facilisis in nibh sit amet, molestie efficitur dui. Sed rhoncus vulputate neque a ultricies. Maecenas molestie libero id mi fermentum malesuada.' />
  ),
  2: (
    <Content
      href='/about'
      mainText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempora totam quisquam hic debitis illum ducimus facilis dolorum quod voluptate.'
    />
  ),
  3: (
    <Content
      href='/projects'
      mainText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus inventore id laborum maiores numquam perferendis, hic nemo, dolorem magnam, sapiente dolore quisquam consequatur sint.'
    />
  ),
  4: (
    <Content
      href='/contact'
      mainText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem temporibus ut accusantium fugit laborum tenetur porro maxime.'
    />
  ),
}

export default function InfoCard() {
  const { currentStage } = useSceneContext()
  return currentStage && content[currentStage]
}
