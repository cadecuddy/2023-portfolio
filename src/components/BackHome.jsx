import React from 'react'
import Link from 'next/link'
import { IoBackspace, IoHome } from 'react-icons/io5'

export default function BackHome({ BackLink, HasHome }) {
  return (
    <>
      <Link href={BackLink} passHref>
        <span className='float-left text-yellow-500 hover:cursor-pointer'>
          <IoBackspace className='text-5xl' />
        </span>
      </Link>
      {HasHome && (
        <Link href='/' passHref>
          <span className='float-right text-yellow-500 hover:cursor-pointer'>
            <IoHome className='text-4xl' />
          </span>
        </Link>
      )}
    </>
  )
}
