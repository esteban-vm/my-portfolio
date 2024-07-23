import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, lazy } from 'react'
import { useSceneContext } from '@/contexts'
import { LoadingSpinner } from '@/shared'

const CyberpunkCity = lazy(() => import('@/cyberpunk_city'))
const CyberpunkGhettoDeLorean = lazy(() => import('@/cyberpunk_ghetto_delorean'))

function Loader() {
  const { progress } = useProgress()
  const percent = (progress / 100).toLocaleString(undefined, { style: 'percent' })

  return (
    <Html className='text-center' center>
      <span className='font-bold text-neon-green-light'>{percent}</span>
      <LoadingSpinner className='-left-1/2' />
    </Html>
  )
}

export default function HomeScene() {
  const { isMobile, isAnimated } = useSceneContext()

  return (
    <Canvas className='cursor-grab active:cursor-grabbing'>
      <Suspense fallback={<Loader />}>
        <CyberpunkCity
          position={[-2, isMobile ? -2.5 : -2, 2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={isMobile ? 1 : 1.2}
        />
        <CyberpunkGhettoDeLorean rotation={[0, Math.PI / 2, 0.2]} scale={isMobile ? 0.15 : 0.2} />
        <directionalLight intensity={10} position={[0, 1, 0]} />
        <Environment preset='night' />
        <PerspectiveCamera position={[0, 0, 10]} makeDefault />
        <OrbitControls
          autoRotate={isAnimated}
          autoRotateSpeed={-0.5}
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
        />
      </Suspense>
    </Canvas>
  )
}
