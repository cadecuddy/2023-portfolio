import React from 'react'
import { useState } from 'react'
import ExperienceCard from './ExperienceCard'
import experience from '@/config/experience'

export default function ExperiencePanel() {
  // Expands the experience card corresponding to the company name
  // when the user clicks the [+] button
  const [expanded, setExpanded] = useState(
    experience.reduce((acc, exp) => {
      acc[exp.company] = 0
      return acc
    }, {}),
  )

  // Toggles the expanded state of the experience card
  const handleExpand = (id) => {
    const newExpanded = { ...expanded }
    newExpanded[id] = newExpanded[id] === 1 ? 0 : 1
    setExpanded(newExpanded)
  }

  return (
    <>
      <div className='text-3xl font-extrabold text-center bg-yellow-600 select-none text-neutral-900'>EXPERIENCE</div>
      <div className='text-center'>
        {experience.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} handleExpand={handleExpand} expanded={expanded} />
        ))}
      </div>
    </>
  )
}
