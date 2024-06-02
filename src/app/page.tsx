'use client'

import { Environment, Html, OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PacmanLoader } from 'react-spinners'
import * as Models from '@/models'

export default function Home() {
  return (
    <Canvas className='absolute left-0 top-0 !h-screen cursor-grab bg-black active:cursor-grabbing'>
      <Suspense
        fallback={
          <Html center>
            <PacmanLoader color='lime' />
          </Html>
        }
      >
        {/* <Models.CuteHomeRobot /> */}
        {/* <Models.CyberpunkCar rotation={[0, Math.PI / 2, 0.2]} scale={0.005} /> */}
        <Models.CyberpunkCity position={[-2, -2, 2]} rotation={[0, Math.PI / 2, 0]} scale={1.2} />
        <Models.CyberpunkGhettoDeLorean rotation={[0, Math.PI / 2, 0.2]} scale={0.2} />
        {/* <Models.LotusEspritHover rotation={[0, Math.PI / 2, 0.2]} scale={0.00005} /> */}
        {/* <Models.SpaceFighter rotation={[0, Math.PI / 2, 0.2]} scale={0.005} /> */}
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
