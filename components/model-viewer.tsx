'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF, Bounds } from '@react-three/drei'

function Model({ url, onReady }: { url: string; onReady: () => void }) {
  const { scene, animations } = useGLTF(url)
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play()
    }
  }, [actions])

  useEffect(() => {
    if (scene) {
      onReady()
    }
  }, [scene])

  return <primitive object={scene} position={[0, -1, 0]} />
}

export default function ModelViewer() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className='w-full h-[300px] lg:h-[400px] max-h-[300px] lg:max-h-[400px]overflow-hidden relative cursor-pointer'>
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Bounds fit clip observe={false} margin={0.22}>
          {isLoaded && <Model url='/models/model.glb' onReady={() => {}} />}
        </Bounds>

        {!isLoaded && <Model url='/models/model.glb' onReady={() => setIsLoaded(true)} />}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
