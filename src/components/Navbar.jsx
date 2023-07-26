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
      <div className='pt-6 text-xl font-bold'>
        <Link href='/about' passHref prefetch={false}>
          <span className='float-left tracking-tighter text-left text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
            /ABOUT
          </span>
        </Link>
        <Link href={'https://blog.' + hostname} passHref prefetch={false} target='_blank'>
          <span className='text-center text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
            /BLOG
          </span>
        </Link>
        <Link href='/resume.pdf' target='_blank' passHref>
          <span className='float-right text-right text-yellow-500 transition-colors duration-150 hover:text-yellow-600'>
            /RESUME
          </span>
        </Link>
      </div>
      <div
        className={inter.className + ' text-2xl font-extrabold text-center bg-yellow-600 text-neutral-900 select-none'}>
        have a look around :)
      </div>
    </>
  )
}
