'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface SkillIcon {
  key: string
  name: string
  icon: any
}

interface CornerJumpAnimationProps {
  skillIcons: SkillIcon[]
}

const CornerJumpAnimation: React.FC<CornerJumpAnimationProps> = ({ skillIcons }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioning) return
      setIsTransitioning(true)

      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % skillIcons.length)
        setTimeout(() => setIsTransitioning(false), 300)
      }, 300)
    }, 800)

    return () => clearInterval(interval)
  }, [isTransitioning, skillIcons.length])

  return (
    <div className='w-full bg-gradient-to-r to-blue-900 from-cyan-900 flex flex-wrap justify-center gap-4 p-10 rounded-lg bg-slate-700 shadow-2xl shadow-slate-800'>
      {skillIcons.map((skill, index) => (
        <div key={skill.key} className='w-9 h-9 relative transition-transform duration-300 ease-in-out'>
          <Image
            src={skill.icon}
            alt={skill.name}
            className={cn(
              'w-full h-full object-cover transition-transform duration-300 ease-in-out',
              index === activeIndex ? 'scale-110 z-10' : 'scale-90 opacity-90'
            )}
          />
        </div>
      ))}
    </div>
  )
}

export default CornerJumpAnimation
