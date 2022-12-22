import dynamic from 'next/dynamic'
import { Box } from '@react-three/drei'
import Scene from '@/components/canvas/Scene'
import { Inter, Fira_Code } from '@next/font/google'
import Link from 'next/link'
import { IoCopyOutline } from 'react-icons/io5'

// Dynamic import is used to prevent a payload when the website starts, that includes threejs, r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Logo = dynamic(() => import('@/components/canvas/TF2'), { ssr: false })
const inter = Inter({ subsets: ['latin'], weight: '800' })
const fira = Fira_Code({ weight: '400' })

// Dom components go here
export default function Page() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('cadecuddy@gmail.com')
  }

  return (
    <div className='container min-h-screen py-4 mx-auto text-center'>
      <div className='flex flex-row items-center justify-center text-2xl font-bold tracking-tight select-none md:text-4xl sm:text-3xl'>
        <Link href='https://drive.google.com/file/d/1z1XbdESvybuzAG_vNfyDXFdP3IuiH-Z8/view?usp=sharing' target='_blank'>
          <span className={inter.className + ' hover:text-yellow-700 transition-colors duration-150'}>RESUME</span>
        </Link>
        <Box className='flex flex-row items-center justify-center rounded-lg w-[170px]'>
          <Scene>
            <Logo />
          </Scene>
        </Box>
        <Link href='/contact'>
          <span className={inter.className + ' hover:text-yellow-700 transition-colors duration-150'}>CONTACT</span>
        </Link>
      </div>
      <div className={fira.className + '  mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[400px] text-neutral-200 pt-4'}>
        <p className='text-lg text-left select-none'>
          How's it going? I'm <span className='text-yellow-500 '>Cade Cuddy</span>, a CS student at NCSU. I love to
          solve complex problems with extensible and scalable code, and have experience working on large-scale projects
          in industry.
        </p>
        <br />
        <br />
        <p className='text-lg text-left'>
          If you'd like to get a hold of me, feel free to reach out to me on
          <Link href='https://www.linkedin.com/in/cade-cuddy-0b0b1b1b1/' target='_blank'>
            <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer'> LinkedIn</span>
          </Link>{' '}
          or shoot me an{' '}
          <span className='text-yellow-500 hover:text-yellow-600 hover:cursor-pointer' onClick={copyToClipboard}>
            email <IoCopyOutline className='inline-block text-xl' onClick={copyToClipboard} />
          </span>
          . I'm apt to work on web apps, distributed systems, and/or cloud computing projects. LMK 😎
        </p>
        <div className='pt-6 text-xl'>
          <Link href='/blog'>
            <span className='float-left text-left text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
              /BLOG
            </span>
          </Link>
          <Link href='/resume'>
            <span className='justify-center ml-4 text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
              /LINKEDIN
            </span>
          </Link>
          <Link href='https://github.com/cadecuddy' target='_blank'>
            <span className='float-right text-right text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
              /GITHUB
            </span>
          </Link>
        </div>
        <div
          className={
            inter.className + ' text-2xl font-extrabold text-center bg-yellow-600 text-neutral-900 select-none'
          }>
          EXPERIENCE
        </div>
      </div>
    </div>
  )
}
