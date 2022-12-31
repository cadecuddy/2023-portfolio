import React from 'react'

export default function BlogDivider({ month }) {
  return (
    <div className='flex flex-row mb-3 text-2xl font-bold tracking-tight border-b border-yellow-600 select-none mt-7 justify-start-center items-l md:text-3xl'>
      <div className='text-yellow-500'>{month}</div>
    </div>
  )
}
