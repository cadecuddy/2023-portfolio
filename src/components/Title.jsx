import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@react-three/drei'
import Scene from './canvas/Scene'

export default function Title() {
  const Logo = dynamic(() => import('@/components/canvas/TF2'), { ssr: false })

  return (
    <>
      <span className={' text-yellow-600'}>CADE</span>
      <Box className='flex flex-row items-center justify-center rounded-lg w-[170px] hover:cursor-pointer'>
        <Scene>
          <Logo />
        </Scene>
      </Box>
      <span className={' text-yellow-600'}>CUDDY</span>
    </>
  )
}
