import { Canvas } from '@react-three/fiber'
import { Bounds, OrbitControls, Preload, Center, PresentationControls, PerspectiveCamera } from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped

  // change the perspective camera postion vector depending on the size of the screen
  // https://stackoverflow.com/questions/1502590/calculate-distance-to-camera-given-fov-and-screen-resolution
  

  // make sure 3d model fits as large as possible in the canvas
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
