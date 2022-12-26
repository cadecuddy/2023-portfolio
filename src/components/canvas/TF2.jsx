import { useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function TF2() {
  const gltf = useLoader(GLTFLoader, '/sentry/sentry.gltf')
  return (
    // 170px width box for fallback while loading
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  )
}
