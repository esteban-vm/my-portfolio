import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

const RobotModel = dynamic(() => import('@/models').then((mod) => mod.RobotModel))

export default function ContactScene() {
  const mq1 = useMediaQuery({ maxWidth: 640 })
  const mq2 = useMediaQuery({ minWidth: 641, maxWidth: 1024, orientation: 'portrait' })

  return (
    <div className='h-1/4 w-full border border-white sm:h-full sm:w-1/3'>
      <Canvas>
        <RobotModel
          position={[0, mq2 ? -0.5 : -1.2, 0]}
          rotation={[0, mq1 ? 0 : -0.5, 0]}
          scale={mq1 ? 1.55 : mq2 ? 0.5 : 1}
        />
        <Environment environmentRotation={[-1.5, -0.5, 1]} preset='apartment' />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping
        />
      </Canvas>
    </div>
  )
}
