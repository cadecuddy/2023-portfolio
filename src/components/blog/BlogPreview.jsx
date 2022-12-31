import Link from 'next/link'
import React from 'react'

export default function BlogPreview({ date, title, route }) {
  return (
    <div className='flex flex-row justify-start text-xl font-normal tracking-tight text-left'>
      <div className='mr-8'>{date}</div>
      <Link href={route} passHref>
        <div className='pr-4 underline border-gray-300 hover:cursor-pointer hover:text-yellow-600'>{title}</div>
      </Link>
    </div>
  )
}
