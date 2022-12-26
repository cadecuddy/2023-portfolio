import React, { useState } from 'react'
import { IoBackspace, IoCode, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import Link from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'
import { DiGo, DiJsBadge, DiPython, DiReact, DiRust } from 'react-icons/di'
import { SiAmazonaws } from 'react-icons/si'

export default function Experiences() {
  const [expanded, setExpanded] = useState([0, 0, 0, 0, 0, 0])

  const handleExpand = (id) => {
    let newExpanded = [...expanded]
    newExpanded[id] = newExpanded[id] === 0 ? 1 : 0
    setExpanded(newExpanded)
  }

  return (
    <div className='container min-h-screen py-12 mx-auto'>
      <div className='mx-16 sm:mx-28 md:mx-40 lg:mx-64 xl:mx-[420px] text-neutral-300 pt-4'>
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
          , and listen to copius amounts of{' '}
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
        <div className='flex flex-row justify-center mt-4 space-x-8'>
          <Link href='https://github.com/cadecuddy' target='_blank'>
            <span className='text-yellow-500 hover:cursor-pointer hover:text-yellow-400'>
              <IoLogoGithub className='text-5xl' />
            </span>
          </Link>
          <Link href='https://twitter.com/cadecuddy' target='_blank'>
            <span className='text-yellow-500 hover:cursor-pointer hover:text-yellow-400'>
              <IoLogoTwitter className='text-5xl' />
            </span>
          </Link>
          <Link href='https://www.linkedin.com/in/cadecuddy/' target='_blank'>
            <span className='text-yellow-500 hover:cursor-pointer hover:text-yellow-400'>
              <IoLogoLinkedin className='text-5xl' />
            </span>
          </Link>
        </div>
        <div className='pt-8 text-center'>
          <div className='text-3xl font-extrabold text-center bg-yellow-600 select-none text-neutral-900'>
            EXPERIENCE
          </div>
          <div className='mt-4'>
            <div className='mt-0'>
              <h3 className='text-xl font-bold text-neutral-300'>Amazon</h3>
              <h4 className='mt-1 text-lg font-bold text-neutral-400'>Software Engineering Intern</h4>
              <p className='mt-1 space-x-1 text-neutral-400'>
                May 2022 - August 2022
                <br />
                <DiReact className='inline-block text-2xl' />
                <DiJsBadge className='inline-block text-2xl' />
                <DiGo className='inline-block text-2xl' />
                <SiAmazonaws className='inline-block text-2xl' />
              </p>
              <button className='mt-2 text-neutral-500 hover:text-yellow-500' onClick={() => handleExpand(0)}>
                {expanded[0] === 1 ? '[-]' : '[+]'}
              </button>
              {expanded[0] === 1 && (
                <ul className='mt-1 space-y-2 text-neutral-400'>
                  <li>Designed and implemented internal computer vision feedback system.</li>
                  <li>Integrated feedback feature using Go, React, and multiple AWS services.</li>
                  <li>Launched feature in prod; reported CV misclassification data on 10,000+ events/day api.</li>
                </ul>
              )}
            </div>
            <div className='mt-4'>
              <h3 className='text-xl font-bold text-neutral-300'>Liquid Rocketry Lab</h3>
              <h4 className='mt-1 text-lg font-bold text-neutral-400'>Student Software Engineer</h4>
              <p className='mt-1 space-y-1 text-neutral-400'>
                August 2020 - Present
                <br />
                <DiRust className='inline-block text-3xl' />
                <DiPython className='inline-block text-2xl' />
              </p>
              <button className='mt-1 text-neutral-500 hover:text-yellow-500' onClick={() => handleExpand(1)}>
                {expanded[1] === 1 ? '[-]' : '[+]'}
              </button>
              {expanded[1] === 1 && (
                <ul className='mt-1 space-y-2 text-neutral-400'>
                  <li>Contributed to custom engine-testing language & compiler for a suborbital rocket CPU.</li>
                  <li>Implemented binary disassembler & test-file parser to validate language configurations.</li>
                  <li>Automated 20 hr/month engine test-file creation process.</li>
                </ul>
              )}
            </div>
            <div className='mt-4'>
              <h3 className='text-xl font-bold text-neutral-300'>Osmosis AI</h3>
              <h4 className='mt-1 text-lg font-bold text-neutral-400'>Software Engineering Intern</h4>
              <p className='mt-1 space-x-1 text-neutral-400'>
                May 2019 - August 2019
                <br />
                <DiPython className='inline-block text-2xl' />
                <SiAmazonaws className='inline-block text-2xl' />
              </p>
              <button className='mt-2 text-neutral-400 hover:text-yellow-500' onClick={() => handleExpand(2)}>
                {expanded[2] === 1 ? '[-]' : '[+]'}
              </button>
              {expanded[2] === 1 && (
                <ul className='mt-1 space-y-2 text-neutral-400'>
                  <li>Trained and tested garbage overflow detection ML model with an average 91% accuracy.</li>
                  <li>Saved time for future developers documenting internal CLI tools.</li>
                  <li>Debugged frontend UI and improved load speed by 25%.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className='pt-8 text-left'>
          <div className='text-3xl font-extrabold text-center bg-yellow-600 select-none text-neutral-900'>
            TECHNOLOGIES
          </div>
          <div className='flex flex-col mt-4 space-y-4 text-center sm:flex-row sm:space-y-0 sm:justify-evenly sm:mr-0 md:mr-6 xl:mr-8'>
            <div className='sm:flex-row sm:justify-start'>
              <h3 className='text-xl font-bold text-neutral-300'>
                <IoCode className='inline-block mr-2' />
                Languages
              </h3>
              <ul className='mt-1 text-neutral-500'>
                <li>Python</li>
                <li>Java</li>
                <li>Go</li>
                <li>Rust</li>
                <li>Typescript</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className='sm:flex-row sm:justify-center'>
              <h3 className='text-xl font-bold text-neutral-300'>
                <DiReact className='inline-block mr-2' />
                Frameworks
              </h3>
              <ul className='mt-1 text-neutral-500'>
                <li>React</li>
                <li>tRPC</li>
                <li>Node.JS</li>
                <li>Express</li>
                <li>TailwindCSS</li>
                <li>Next.JS</li>
                <li>Prisma</li>
              </ul>
            </div>
            <div className='sm:flex-row sm:justify-end'>
              <h3 className='text-xl font-bold text-neutral-300'>
                <IoLogoGithub className='inline-block mr-2' />
                Tools
              </h3>
              <ul className='mt-1 text-neutral-500'>
                <li>Git</li>
                <li>UNIX</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
