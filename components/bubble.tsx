// 'use client'
import { cn } from './../lib/utils'
export default function Bubble() {
  const spans = [11, 12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 17, 13, 28, 25, 18, 21, 15, 13, 26, 17, 13, 28]

  return (
    <div className='bubbles absolute inset-0 pb-16 flex items-end justify-between overflow-hidden'>
      {spans.map((i, index) => (
        <span
          key={index}
          suppressHydrationWarning
          style={{ '--i': i } as React.CSSProperties}
          className={cn(
            'w-7 h-7 bg-sky-400 my-1 rounded-full relative bottom-full',
            i % 2 === 0
              ? 'bg-red-500'
              : (i + index) % 2 === 0
              ? 'bg-sky-500'
              : (Math.floor(Math.random() * 10) + i) % 2 === 0
              ? 'bg-orange-500'
              : 'bg-green-500'
          )}
        ></span>
      ))}
    </div>
  )
}
