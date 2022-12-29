import React from 'react'
import Link from 'next/link'
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5'

export default function Socials() {
  return (
    <>
      <div className='flex flex-row justify-center mt-4 space-x-8'>
        <Link href='https://github.com/cadecuddy' target='_blank'>
          <span className='text-yellow-500 hover:cursor-pointer hover:text-yellow-400'>
            <IoLogoGithub className='text-5xl' />
          </span>
        </Link>
        <Link href='https://twitter.com/cadecuddy' target='_blank'>
          <span className='text-yellow-500 hover:cursor-pointer hover:text-yellow-400'>
            <IoLogoTwitter className='text-5xl' />
          </span>
        </Link>
        <Link href='https://www.linkedin.com/in/cadecuddy/' target='_blank'>
          <span className='text-yellow-500 hover:cursor-pointer hover:text-yellow-400'>
            <IoLogoLinkedin className='text-5xl' />
          </span>
        </Link>
      </div>
    </>
  )
}
