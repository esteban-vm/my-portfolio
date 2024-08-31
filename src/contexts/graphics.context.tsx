import type { SceneStage } from '@/types'
import * as React from 'react'
import { useMediaQuery } from 'react-responsive'

interface IGraphicsContext {
  stage: {
    current: SceneStage
    change: (value: SceneStage) => void
  }

  scene: {
    isMobile: boolean
    isRotating: boolean
    rotate: () => void
    stop: () => void
  }
}

const GraphicsContext = React.createContext<IGraphicsContext>(null!)

export function GraphicsContextProvider(props: { children: React.ReactNode }) {
  const isMobileScene = useMediaQuery({ maxWidth: 767 })
  const [isRotatingScene, setIsRotatingScene] = React.useState(true)
  const [currentStage, setCurrentStage] = React.useState<SceneStage>(1)

  const rotateScene = React.useCallback(() => setIsRotatingScene(true), [])
  const stopScene = React.useCallback(() => setIsRotatingScene(false), [])

  const value = React.useMemo((): IGraphicsContext => {
    const stage: IGraphicsContext['stage'] = {
      current: currentStage,
      change: setCurrentStage,
    }

    const scene: IGraphicsContext['scene'] = {
      isMobile: isMobileScene,
      isRotating: isRotatingScene,
      rotate: rotateScene,
      stop: stopScene,
    }

    return { stage, scene }
  }, [currentStage, isRotatingScene, rotateScene, isMobileScene, stopScene])

  return <GraphicsContext.Provider value={value} {...props} />
}

export const useGraphicsContext = () => React.useContext(GraphicsContext)
