import React from 'react'
import Link from 'next/link'
import { IoBackspace } from 'react-icons/io5'

export default function blog() {
  return (
    <div className='container min-h-screen py-4 mx-auto text-center'>
      <div className='mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[420px] text-neutral-200 pt-4 select-none mt-4'>
        <div className='flex flex-row text-2xl font-bold tracking-tight select-none justify-start-center items-l md:text-4xl sm:text-3xl'>
          <Link href='/'>
            <span className='text-yellow-500 hover:cursor-pointer'>
              <IoBackspace className='text-5xl ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
