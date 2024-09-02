import type { SceneStage } from '@/types'
import { useHomeContext } from '@/contexts'
import InfoCard from './info_card'

type InfoCardContent = Record<NonNullable<SceneStage>, ReturnType<typeof InfoCard>>

const content: InfoCardContent = {
  1: (
    <InfoCard mainText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim vitae lacus vitae porttitor. Proin nunc arcu, facilisis in nibh sit amet, molestie efficitur dui. Sed rhoncus vulputate neque a ultricies. Maecenas molestie libero id mi fermentum malesuada.' />
  ),
  2: (
    <InfoCard
      href='/about'
      mainText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempora totam quisquam hic debitis illum ducimus facilis dolorum quod voluptate.'
    />
  ),
  3: (
    <InfoCard
      href='/projects'
      mainText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat temporibus inventore id laborum maiores numquam perferendis, hic nemo, dolorem magnam, sapiente dolore quisquam consequatur sint.'
    />
  ),
  4: (
    <InfoCard
      href='/contact'
      mainText='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem temporibus ut accusantium fugit laborum tenetur porro maxime.'
    />
  ),
}

export default function InfoCardRenderer() {
  const {
    stage: { current },
  } = useHomeContext()

  return current && content[current]
}
