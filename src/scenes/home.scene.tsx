import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, lazy } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useHomeContext } from '@/contexts'
import { LoadingSpinner } from '@/shared'

const CarModel = lazy(() => import('@/models').then((mod) => ({ default: mod.CarModel })))
const CityModel = lazy(() => import('@/models').then((mod) => ({ default: mod.CityModel })))

export default function HomeScene() {
  const mq = useMediaQuery({ maxWidth: 768 })

  const {
    scene: { isRotating },
  } = useHomeContext()

  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <CityModel position={[-2, mq ? -2.5 : -2, 2]} rotation={[0, Math.PI / 2, 0]} scale={mq ? 1 : 1.2} />
        <CarModel rotation={[0, Math.PI / 2, 0.2]} scale={mq ? 0.15 : 0.2} />
        <directionalLight intensity={10} position={[0, 1, 0]} />
        <Environment preset='night' />
        <PerspectiveCamera position={[0, 0, 10]} makeDefault />
        <OrbitControls
          autoRotate={isRotating}
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

function Loader() {
  const { progress } = useProgress()
  const percent = (progress / 100).toLocaleString(undefined, { style: 'percent' })

  return (
    <Html className='text-center' center>
      <span className='font-bold text-neon-green-light'>{percent}</span>
      <LoadingSpinner className='-left-1/2' color='#0cffed' />
    </Html>
  )
}
