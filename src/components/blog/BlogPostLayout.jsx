import React from 'react'
import Layout from '../Layout'
import BackHome from '../BackHome'

export default function BlogPostLayout({ children, date, title }) {
  return (
    <>
      <Layout>
        <BackHome BackLink='/blog' HasHome={true} />
        <div className='pb-2 mt-4 text-left border-b border-neutral-500'>
          <h1 className='mt-2 text-3xl font-bold text-yellow-500'>{title}</h1>
          <h2 className='text-lg text-neutral-400'>{date}</h2>
        </div>
        <div className='mt-2 text-xl font-normal tracking-tight text-left text-zinc-400'>{children}</div>
      </Layout>
    </>
  )
}
