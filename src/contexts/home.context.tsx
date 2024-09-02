import type { SceneStage } from '@/types'
import type { ReactNode } from 'react'
import { createContext, useCallback, useContext, useMemo, useState } from 'react'

interface IHomeContext {
  stage: {
    current: SceneStage
    change: (value: SceneStage) => void
  }

  scene: {
    isRotating: boolean
    rotate: () => void
    stop: () => void
  }
}

const HomeContext = createContext<IHomeContext>(null!)

export function HomeContextProvider(props: { children: ReactNode }) {
  const [currentStage, setCurrentStage] = useState<SceneStage>(1)
  const [isRotatingScene, setIsRotatingScene] = useState(true)

  const rotateScene = useCallback(() => setIsRotatingScene(true), [])
  const stopScene = useCallback(() => setIsRotatingScene(false), [])

  const value = useMemo((): IHomeContext => {
    const stage: IHomeContext['stage'] = {
      current: currentStage,
      change: setCurrentStage,
    }

    const scene: IHomeContext['scene'] = {
      isRotating: isRotatingScene,
      rotate: rotateScene,
      stop: stopScene,
    }

    return { stage, scene }
  }, [currentStage, isRotatingScene, rotateScene, stopScene])

  return <HomeContext.Provider value={value} {...props} />
}

export const useHomeContext = () => useContext(HomeContext)
