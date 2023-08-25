import React from 'react'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'], weight: '800' })

export default function Navbar() {
  const [hostname, setHostname] = useState('')

  useEffect(() => {
    setHostname(window.location.hostname.replace('www.', ''))
  }, [])

  return (
    <>
      <div className='mt-2 text-xl font-bold justify-evenly text-center bg-yellow-600 select-none'>
        <Link href='/about' passHref prefetch={false}>
          <span className='ml-2 float-left tracking-tighter text-left text-neutral-900 transition-colors duration-150 hover:text-neutral-200 '>
            ABOUT
          </span>
        </Link>
        <Link href={'https://blog.' + hostname} passHref prefetch={false} target='_blank'>
          <span className='text-center text-neutral-900 transition-colors duration-150 hover:text-neutral-200'>
            BLOG
          </span>
        </Link>
        <Link href='/resume.pdf' target='_blank' passHref>
          <span className='mr-2 float-right text-right text-neutral-900 transition-colors duration-150 hover:text-neutral-200'>
            RESUME
          </span>
        </Link>
      </div>
      <div
        className={inter.className + ' text-2xl font-extrabold text-center bg-yellow-600 text-neutral-900 select-none'}>
      </div>
    </>
  )
}
