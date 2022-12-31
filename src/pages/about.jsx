/* eslint-disable react/no-unescaped-entities */
import { IoBackspace } from 'react-icons/io5'
import Link from 'next/link'
import ExperiencePanel from '@/components/about/ExperiencePanel'
import Socials from '@/components/about/Socials'
import TechnologyPanel from '@/components/about/TechnologyPanel'
import BackHome from '@/components/BackHome'
import Layout from '@/components/Layout'

export default function Experiences() {
  return (
    <Layout>
      <BackHome BackLink='/' HasHome={false} />
      <div className='mt-16'>
        <p className='mt-4 text-lg text-left'>
          I'm currently in my senior year at North Carolina State University where I study Computer Science. In my free
          time I like to read science fiction, practice{' '}
          <Link href='https://en.wikipedia.org/wiki/Card_counting' target='_blank' passHref>
            <span className='font-bold text-yellow-500 hover:underline'>blackjack</span>
          </Link>
          , and listen to a breadth of{' '}
          <Link href='https://open.spotify.com/user/cade.49' target='_blank' passHref>
            <span className='font-bold text-yellow-500 hover:underline'>music</span>
          </Link>
          .
          <br />
          <br />
          Building side projects is another free time activity of mine. My current main focus is a GeoGuessr-inspired
          webapp called{' '}
          <Link href='https://github.com/cadecuddy/GeoSleuth' target='_blank' passHref>
            <span className='font-bold text-yellow-500 hover:underline'>GeoSleuth</span>
          </Link>
          .
        </p>
      </div>
      <Socials />
      <div className='pt-8 text-center'>
        <ExperiencePanel />
      </div>
      <div className='pt-8 text-left'>
        <TechnologyPanel />
      </div>
    </Layout>
  )
}
