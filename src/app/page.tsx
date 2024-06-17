import type { Metadata } from 'next'
import { InfoCard } from '@/components'
import { SceneContextProvider } from '@/contexts'
import { HomeScene } from '@/scenes'

export const metadata: Metadata = {
  title: 'My Portfolio | Home',
}

export default function Home() {
  return (
    <SceneContextProvider>
      <InfoCard />
      <HomeScene />
    </SceneContextProvider>
  )
}
