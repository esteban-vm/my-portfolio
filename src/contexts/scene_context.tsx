import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

interface ISceneContext {
  isMobile: boolean
  currentStage: AppTypes.CurrentStage
  setCurrentStage: (currentStage: AppTypes.CurrentStage) => void
  isAnimated: boolean
  rotateScene: () => void
  stopScene: () => void
}

const SceneContext = createContext<ISceneContext>(null!)

export function SceneContextProvider(props: { children: ReactNode }) {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [currentStage, setCurrentStage] = useState<AppTypes.CurrentStage>(1)
  const [isAnimated, setIsAnimated] = useState(true)

  const rotateScene = useCallback(() => setIsAnimated(true), [])
  const stopScene = useCallback(() => setIsAnimated(false), [])

  const value = useMemo((): ISceneContext => {
    return {
      isMobile,
      currentStage,
      setCurrentStage,
      isAnimated,
      rotateScene,
      stopScene,
    }
  }, [currentStage, isAnimated, isMobile, rotateScene, stopScene])

  return <SceneContext.Provider value={value} {...props} />
}

export const useSceneContext = () => useContext(SceneContext)
