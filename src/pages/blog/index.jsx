import BackHome from '@/components/BackHome'
import BlogDivider from '@/components/blog/BlogDivider'
import BlogPreview from '@/components/blog/BlogPreview'
import Layout from '@/components/Layout'

export default function blog() {
  return (
    <Layout>
      <BackHome BackLink='/' HasHome={false} />
      <div className='mt-20'>
        <BlogDivider month='December 2022' />
        <BlogPreview date='2022-12-31' title='Goals, Technologies, and Plans for 2023' route='blog/2023-Plans' />
      </div>
    </Layout>
  )
}
