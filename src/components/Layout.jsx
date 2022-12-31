import React from 'react'

export default function Layout({ children }) {
  return (
    <div className='container min-h-screen py-4 mx-auto text-center'>
      <div className='mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[420px] text-neutral-200 pt-4 mt-4'>{children}</div>
    </div>
  )
}
