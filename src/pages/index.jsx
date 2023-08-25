/* eslint-disable react/no-unescaped-entities */
import dynamic from 'next/dynamic'
import { Box } from '@react-three/drei'
import Scene from '@/components/canvas/Scene'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import { IoCopyOutline } from 'react-icons/io5'
import { Suspense } from 'react'
import GameOfLife from '@/components/GameOfLife'
import Navbar from '@/components/Navbar'

const Logo = dynamic(() => import('@/components/canvas/TF2'), { ssr: false })
const inter = Inter({ subsets: ['latin'], weight: '800' })

export default function Page() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_EMAIL)
  }

  return (
    <div className='container min-h-screen py-4 mx-auto text-center'>
      <div className='flex flex-row items-center justify-center text-2xl font-bold tracking-tight select-none md:text-4xl sm:text-3xl'>
        <span className={inter.className + ' text-yellow-600'}>CADE</span>
        <Box className='flex flex-row items-center justify-center rounded-lg w-[170px] hover:cursor-pointer'>
          <Scene>
            <Logo />
          </Scene>
        </Box>
        <span className={inter.className + ' text-yellow-600'}>CUDDY</span>
      </div>
      <div className={' mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[420px] text-neutral-300 pt-4 select-none'}>
        <p className='text-lg text-left select-none'>
          How's it going? I'm <strong>Cade</strong>, a final-semester CS student at NCSU. I love to
          solve complex problems with extensible and scalable code, and have
          <Link href='/about' passHref prefetch={false}>
            <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'> experience </span>
          </Link>
          working on large-scale projects in industry.
        </p>
        <br />
        <br />
        <p className='text-lg text-left '>
          My interests lie in <span className='font-bold'>distributed systems</span>,{' '}
          <span className='font-bold'>full-stack development</span>, and{" "}
          <span className='font-bold'>data engineering</span>. When I find the time, I like making 
          {" "}
          <Link href='https://www.github.com/cadecuddy' passHref prefetch={false} target='_blank'>
          <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'>things</span> {" "}
          </Link>
          related to those topics.

          If you'd like to get a hold of me, feel free to reach out to me on
          <Link href='https://www.linkedin.com/in/cadecuddy/' target='_blank' passHref>
            <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'> LinkedIn</span>
          </Link>{' '}
          or shoot me an{' '}
          <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer' onClick={copyToClipboard}>
            email <IoCopyOutline className='inline-block text-xl' onClick={copyToClipboard} />
          </span>
          . 
        </p>
        <Navbar />
        <div className={inter.className}>
          <Suspense
            fallback={
              <div className='flex flex-row items-center justify-center w-full h-full'>
                <div className='w-1/2 bg-yellow-500 h-1/2' />
              </div>
            }></Suspense>
        </div>
      </div>
    </div>
  )
}
