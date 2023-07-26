import iconMap from '@/config/iconmap'

export default function ExperienceCard({ experience, handleExpand, expanded }) {
  const { company, title, start, end, description, technologies } = experience
  return (
    <>
      <div className='mt-4'>
        <h3 className='text-xl font-bold text-neutral-300'>{company}</h3>
        <h4 className='mt-1 text-lg font-bold text-neutral-400'>{title}</h4>
        <p className='mt-1 space-x-1 text-neutral-400'>
          {start} - {end}
          <br />
          {technologies.map((tech, index) => (
            <span key={index} className='inline-flex items-center'>
              {iconMap[tech]}
            </span>
          ))}
        </p>
        <button className='mt-1 text-neutral-500 hover:text-yellow-500' onClick={handleExpand}>
          {expanded ? '[-]' : '[+]'}
        </button>
        {expanded && <p className='mt-1 space-y-2 text-neutral-400'>{description}</p>}
      </div>
    </>
  )
}
