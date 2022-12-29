import { IoCode, IoLogoGithub } from 'react-icons/io5'
import { DiReact } from 'react-icons/di'

export default function TechnologyPanel() {
  return (
    <>
      <div className='text-3xl font-extrabold text-center bg-yellow-600 select-none text-neutral-900'>TECHNOLOGIES</div>
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
    </>
  )
}
