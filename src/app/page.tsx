import type { Metadata } from 'next'
import { SceneContextProvider } from '@/contexts'
import { HomeScene } from '@/scenes'

export const metadata: Metadata = {
  title: 'My Portfolio | Home',
}

export default function Home() {
  return (
    <SceneContextProvider>
      <HomeScene />
    </SceneContextProvider>
  )
}
