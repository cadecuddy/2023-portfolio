/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Preload, Center, PresentationControls, PerspectiveCamera } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  return (
    <Canvas {...props}>
      <Bounds clip observe>
        <Center>
          <PerspectiveCamera makeDefault position={[-1, 0.75, 1.5]} />
          <directionalLight intensity={0.75} />
          <ambientLight intensity={0.75} />
          {children}
          <Preload all />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={2.5}
          />
        </Center>
      </Bounds>
    </Canvas>
  )
}
