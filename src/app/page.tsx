'use client'

import { Environment, Html, OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useMediaQuery } from 'react-device-sizes'
import { PacmanLoader } from 'react-spinners'
import { CyberpunkCity, CyberpunkGhettoDeLorean } from '@/models'

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <Canvas className='absolute z-0 !h-screen cursor-grab bg-black active:cursor-grabbing'>
      <Suspense
        fallback={
          <Html center>
            <PacmanLoader color='lime' />
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
        autoRotateSpeed={-0.5}
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        enableDamping
      />
      <Stats />
    </Canvas>
  )
}
