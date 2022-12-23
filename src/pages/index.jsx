import dynamic from 'next/dynamic'
import { Box } from '@react-three/drei'
import Scene from '@/components/canvas/Scene'
import { Inter, Inconsolata } from '@next/font/google'
import Link from 'next/link'
import { IoCopyOutline } from 'react-icons/io5'
import { GoMute, GoUnmute } from 'react-icons/go'
import { useState } from 'react'
import GameOfLife from '@/components/GameOfLife'

const Logo = dynamic(() => import('@/components/canvas/TF2'), { ssr: false })
const inter = Inter({ subsets: ['latin'], weight: '800' })
const inconsolata = Inconsolata({ weight: '400' })

// Dom components go here
export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false)
  // set the music element on the page

  const copyToClipboard = () => {
    navigator.clipboard.writeText('cadecuddy@gmail.com')
  }

  return (
    <div className='container min-h-screen py-4 mx-auto text-center'>
      <div className='flex flex-row items-center justify-center text-2xl font-bold tracking-tight select-none md:text-4xl sm:text-3xl'>
        <span className={inter.className}>CADE</span>
        <Box className='flex flex-row items-center justify-center rounded-lg w-[170px]'>
          <Scene>
            <Logo />
          </Scene>
        </Box>
        <span className={inter.className}>CUDDY</span>
      </div>
      <div
        className={
          inconsolata.className + ' mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[420px] text-neutral-200 pt-4 select-none'
        }>
        <p className='text-lg text-left select-none'>
          How's it going? I'm <span className='text-yellow-500 '>Cade</span>, a full-time CS student at NCSU. I love to
          solve complex problems with extensible and scalable code, and have experience working on large-scale projects
          in industry.
        </p>
        <br />
        <br />
        <p className='text-lg text-left '>
          If you'd like to get a hold of me, feel free to reach out to me on
          <Link href='https://www.linkedin.com/in/cadecuddy/' target='_blank'>
            <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'> LinkedIn</span>
          </Link>{' '}
          or shoot me an{' '}
          <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer' onClick={copyToClipboard}>
            email <IoCopyOutline className='inline-block text-xl' onClick={copyToClipboard} />
          </span>
          . Always apt to work on web apps, distributed systems, and / or cloud computing projects when I get the time.
          I'm also down to just have conversations about things!
        </p>
        <div className='pt-6 text-xl font-bold'>
          <Link href='https://github.com/cadecuddy' target='_blank'>
            <span className='float-left text-left text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
              /GITHUB
            </span>
          </Link>
          <Link href='/blog'>
            <span className='text-center text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
              /BLOG
            </span>
          </Link>
          <Link
            href='https://drive.google.com/file/d/1z1XbdESvybuzAG_vNfyDXFdP3IuiH-Z8/view?usp=sharing'
            target='_blank'>
            <span className='float-right text-right text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
              /RESUME
            </span>
          </Link>
        </div>
        <div
          className={
            inter.className + ' text-2xl font-extrabold text-center bg-yellow-600 text-neutral-900 select-none'
          }>
          HAVE A LOOK AROUND 👀
        </div>
        <audio id='music' loop>
          <source src='song/song.mp3' type='audio/mpeg' />
        </audio>
        <div className={inter.className}>
          <GameOfLife />
        </div>
        <div className='absolute bottom-0 right-0 p-4 text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
          {isPlaying ? (
            <GoUnmute
              className='text-4xl text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'
              onClick={() => {
                setIsPlaying(false)
                document.getElementById('music').pause()
              }}
            />
          ) : (
            <GoMute
              className='text-4xl text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'
              onClick={() => {
                setIsPlaying(true)
                document.getElementById('music').volume = 0.3
                document.getElementById('music').play()
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
}
