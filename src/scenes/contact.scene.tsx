import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { useGraphicsContext } from '@/contexts'

const RobotModel = dynamic(() => import('@/models').then((mod) => mod.RobotModel))

export default function ContactScene() {
  const {
    scene: { isMobile },
  } = useGraphicsContext()

  return (
    <Canvas className='!h-1/4 w-full md:!h-full md:!w-2/5 lg:!w-1/3'>
      <RobotModel position={[0, -1.2, 0]} rotation={[0, isMobile ? 0 : -0.5, 0]} scale={isMobile ? 1.55 : 1} />
      <Environment environmentRotation={[-1.5, -0.5, 1]} preset='apartment' />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableDamping
      />
    </Canvas>
  )
}
