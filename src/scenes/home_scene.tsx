import { Environment, Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useSceneContext } from '@/contexts'
import { CyberpunkCity, CyberpunkGhettoDeLorean } from '@/models'
import { LoadingSpinner } from '@/shared'

export default function HomeScene() {
  const { isMobile, isAnimated } = useSceneContext()

  return (
    <Canvas className='cursor-grab active:cursor-grabbing'>
      <Suspense
        fallback={
          <Html center>
            <LoadingSpinner size={30} />
          </Html>
        }
      >
        <CyberpunkCity
          position={[-2, isMobile ? -2.5 : -2, 2]}
          rotation={[0, Math.PI / 2, 0]}
          scale={isMobile ? 1 : 1.2}
        />
        <CyberpunkGhettoDeLorean rotation={[0, Math.PI / 2, 0.2]} scale={isMobile ? 0.15 : 0.2} />
      </Suspense>
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
    </Canvas>
  )
}
