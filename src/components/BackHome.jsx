import React from 'react'
import Link from 'next/link'
import { IoBackspace, IoHome } from 'react-icons/io5'

export default function BackHome({ BackLink, HasHome }) {
  return (
    <div className='flex items-center justify-between'>
      <Link href={BackLink} passHref>
        <span className='text-yellow-500 hover:cursor-pointer'>
          <IoBackspace className='text-5xl' />
        </span>
      </Link>
      {HasHome && (
        <Link href='/' passHref>
          <span className='text-yellow-500 hover:cursor-pointer'>
            <IoHome className='text-4xl' />
          </span>
        </Link>
      )}
    </div>
  )
}
