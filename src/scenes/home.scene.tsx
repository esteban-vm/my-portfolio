import * as Drei from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, lazy } from 'react'
import { useGraphicsContext } from '@/contexts'
import { LoadingSpinner } from '@/shared'

const CarModel = lazy(() => import('@/models').then((mod) => ({ default: mod.CarModel })))
const CityModel = lazy(() => import('@/models').then((mod) => ({ default: mod.CityModel })))

export default function HomeScene() {
  const {
    scene: { isMobile, isRotating },
  } = useGraphicsContext()

  return (
    <Canvas>
      <Suspense fallback={<Loader />}>
        <CityModel position={[-2, isMobile ? -2.5 : -2, 2]} rotation={[0, Math.PI / 2, 0]} scale={isMobile ? 1 : 1.2} />
        <CarModel rotation={[0, Math.PI / 2, 0.2]} scale={isMobile ? 0.15 : 0.2} />
        <directionalLight intensity={10} position={[0, 1, 0]} />
        <Drei.Environment preset='night' />
        <Drei.PerspectiveCamera position={[0, 0, 10]} makeDefault />
        <Drei.OrbitControls
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
  const { progress } = Drei.useProgress()
  const percent = (progress / 100).toLocaleString(undefined, { style: 'percent' })

  return (
    <Drei.Html className='text-center' center>
      <span className='font-bold text-neon-green-light'>{percent}</span>
      <LoadingSpinner className='-left-1/2' color='#0cffed' />
    </Drei.Html>
  )
}
