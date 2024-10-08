/*
  Auto-generated by: https://github.com/pmndrs/gltfjsx
  Command: npx gltfjsx@6.2.16 scene.gltf --transform --types 
  Files: scene.gltf [50.78KB] > scene-transformed.glb [240.13KB] (-373%)
  Author: born2012 (https://sketchfab.com/born2012)
  License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
  Source: https://sketchfab.com/3d-models/cyberpunk-city-1-14d2eaa145ee42938e004115871adf6c
  Title: Cyberpunk City - #1
*/

import type * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useHomeContext } from '@/contexts'
import { getModelPath } from '@/utils'

interface GLTFResult extends GLTF {
  nodes: {
    Object_4: THREE.Mesh
    Object_5: THREE.Mesh
    Object_22: THREE.Mesh
  }
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial
    PaletteMaterial002: THREE.MeshStandardMaterial
    PaletteMaterial003: THREE.MeshPhysicalMaterial
  }
}

const path = getModelPath('city')

export default function CityModel(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(path) as GLTFResult

  const {
    stage: { change },
  } = useHomeContext()

  useFrame(({ camera }) => {
    const cameraX = camera.position.x

    switch (true) {
      case cameraX >= -1 && cameraX <= 1:
        change(1)
        break
      case cameraX >= 1.5 && cameraX <= 5:
      case cameraX <= -1.5 && cameraX >= -5:
        change(2)
        break
      case cameraX >= 5.5 && cameraX <= 9:
      case cameraX <= -5.5 && cameraX >= -9:
        change(3)
        break
      case cameraX >= 9.5:
      case cameraX <= -9.5:
        change(4)
        break
      default:
        change(null)
        break
    }
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.PaletteMaterial003}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.007}
      />
    </group>
  )
}

useGLTF.preload(path)
