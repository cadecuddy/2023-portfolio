import React from 'react'
import Layout from '../Layout'
import BackHome from '../BackHome'

export default function BlogPostLayout({ children, date, title }) {
  return (
    <>
      <Layout>
        <BackHome BackLink='/blog' HasHome={true} />
        <div className='mt-16 text-left border-b border-neutral-500'>
          <h1 className='text-xl'>Cade Cuddy</h1>
          <h2 className='text-neutral-400'>{date}</h2>
          <h1 className='mt-2 text-3xl font-bold text-yellow-500'>{title}</h1>
          <br />
        </div>
        <div className='mt-2 text-xl text-left text-neutral-300'>{children}</div>
      </Layout>
    </>
  )
}
