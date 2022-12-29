import { IoBackspace } from 'react-icons/io5'
import Link from 'next/link'
import ExperiencePanel from '@/components/about/ExperiencePanel'
import Socials from '@/components/about/Socials'
import TechnologyPanel from '@/components/about/TechnologyPanel'

export default function Experiences() {
  return (
    <div className='container min-h-screen py-12 mx-auto'>
      <div className='pt-4 mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[420px] text-neutral-300'>
        <div className='flex flex-row text-2xl font-bold tracking-tight justify-start-center md:text-4xl sm:text-3xl'>
          <Link href='/'>
            <span className='text-yellow-500 hover:cursor-pointer'>
              <IoBackspace className='text-5xl ' />
            </span>
          </Link>
        </div>
        <p className='mt-4 text-lg text-left'>
          I'm currently in my senior year at North Carolina State University where I study Computer Science. In my free
          time I like to read science fiction, practice{' '}
          <Link href='https://en.wikipedia.org/wiki/Card_counting' target='_blank'>
            <span className='font-bold text-yellow-500 hover:underline'>card counting</span>
          </Link>
          , and listen to a breadth of{' '}
          <Link href='https://open.spotify.com/user/cade.49' target='_blank'>
            <span className='font-bold text-yellow-500 hover:underline'>music</span>
          </Link>
          .
          <br />
          <br />
          <p className='mt-4 text-lg text-left'>
            Building side projects is another free time activity of mine. My current main focus is a GeoGuessr-inspired
            webapp called{' '}
            <Link href='https://github.com/cadecuddy/GeoSleuth' target='_blank'>
              <span className='font-bold text-yellow-500 hover:underline'>GeoSleuth</span>
            </Link>
            .
          </p>
        </p>
        <Socials />
        <div className='pt-8 text-center'>
          <ExperiencePanel />
        </div>
        <div className='pt-8 text-left'>
          <TechnologyPanel />
        </div>
      </div>
    </div>
  )
}
