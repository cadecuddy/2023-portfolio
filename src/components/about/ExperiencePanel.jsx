import React from 'react'
import { useState } from 'react'
import ExperienceCard from './ExperienceCard'
import experience from '@/config/information'

export default function ExperiencePanel() {
  // Expands the experience card corresponding to the index
  // when the user clicks the [+] button
  const [expanded, setExpanded] = useState(
    experience.reduce((acc, _, index) => {
      acc[index] = 0
      return acc
    }, {}),
  )

  // Toggles the expanded state of the experience card
  const handleExpand = (index) => {
    const newExpanded = { ...expanded }
    newExpanded[index] = newExpanded[index] === 1 ? 0 : 1
    setExpanded(newExpanded)
  }

  return (
    <>
      <div className='text-3xl font-extrabold text-center bg-yellow-600 select-none text-neutral-900'>EXPERIENCE</div>
      <div className='text-center'>
        {experience.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            handleExpand={() => handleExpand(index)}
            expanded={expanded[index] === 1}
          />
        ))}
      </div>
    </>
  )
}
