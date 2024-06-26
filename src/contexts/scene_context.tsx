import type { CurrentStage } from '@/types'
import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import { useMediaQuery } from 'react-device-sizes'

interface ISceneContext {
  isMobile: boolean
  currentStage: CurrentStage
  setCurrentStage: (currentStage: CurrentStage) => void
  isAnimated: boolean
  setIsAnimated: (isAnimated: boolean) => void
}

const SceneContext = createContext<ISceneContext>(null!)

export function SceneContextProvider(props: { children: ReactNode }) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [currentStage, setCurrentStage] = useState<CurrentStage>(1)
  const [isAnimated, setIsAnimated] = useState(true)

  const value: ISceneContext = {
    isMobile,
    currentStage,
    setCurrentStage,
    isAnimated,
    setIsAnimated,
  }

  return <SceneContext.Provider value={value} {...props} />
}

export const useSceneContext = () => useContext(SceneContext)
