import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function TF2() {
  const gltf = useLoader(GLTFLoader, '/sentry/sentry.gltf')
  return <primitive object={gltf.scene} />
}
