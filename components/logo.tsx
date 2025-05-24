import { LaptopMinimal } from 'lucide-react'
import React from 'react'

export default function Logo() {
  return (
    <div className='flex gap-1 items-center'>
      <div className='flex items-center'>
        <LaptopMinimal size={32} />
        <div className='flex flex-col gap-0 font-bold'>
          <span className='text-sm leading-3'>ong</span>
          <span className='text-sm leading-3'>ev</span>
        </div>
      </div>
    </div>
  )
}
