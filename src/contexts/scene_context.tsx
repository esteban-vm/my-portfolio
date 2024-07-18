import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ISceneContext {
  isMobile: boolean
  currentStage: AppTypes.CurrentStage
  setCurrentStage: (currentStage: AppTypes.CurrentStage) => void
  isAnimated: boolean
  setIsAnimated: (isAnimated: boolean) => void
}

const SceneContext = createContext<ISceneContext>(null!)

export function SceneContextProvider(props: { children: ReactNode }) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [currentStage, setCurrentStage] = useState<AppTypes.CurrentStage>(1)
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
