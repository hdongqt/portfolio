'use client'
import { Minus, Square, SquareTerminal, X } from 'lucide-react'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  speed?: number
  onComplete?: () => void
}

interface AnimatedTextProps {
  lines: string[]
  speed?: number
  className?: string
}

const TypingText = React.memo(({ text, speed = 100, onComplete }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
        timeoutId = setTimeout(type, speed)
      } else {
        onComplete?.()
      }
    }

    type()
    return () => {
      clearTimeout(timeoutId)
      setDisplayedText('')
    }
  }, [text, speed, onComplete])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='whitespace-pre-wrap will-change-contents'
    >
      {displayedText}
      {displayedText.length < text.length && <span className='inline-block animate-pulse will-change-opacity'>|</span>}
    </motion.span>
  )
})

const AnimatedText = React.memo(({ lines, speed = 1000, className = '' }: AnimatedTextProps) => {
  const colors = [
    'text-blue-400',
    'text-pink-500',
    'text-yellow-400',
    'text-purple-400',
    'text-green-500',
    'text-green-500',
    'text-gray-300',
    'text-green-400',
    'text-sky-500'
  ]

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: (index * speed) / 1000,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className={`mt-2 whitespace-pre-wrap will-change-transform ${colors[index] || 'text-gray-300'}`}
        >
          {line}
        </motion.div>
      ))}
    </div>
  )
})

const animatedLines = [
  '▲ Next.js 15.2.3 (Turbopack)',
  '- Fullname: Hoàng Hữu Đồng',
  '- Hometown: Hải Lăng, Quảng Trị',
  '- Phone: 0373886375',
  '- Email: hdongqt@gmail.com',
  'Welcome to Dong Dev Portfolio...'
]

export default function Command() {
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoverText, setHoverText] = useState('')
  const [isHovering, setIsHovering] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true)
  }, [])

  const generateRandomText = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/'
    let result = ''
    for (let i = 0; i < chars.length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (terminalRef.current) {
        const rect = terminalRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
        if (Math.random() > 0.7) {
          setHoverText(generateRandomText())
        }
      }
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const terminalElement = terminalRef.current
    if (terminalElement) {
      terminalElement.addEventListener('mousemove', handleMouseMove)
      terminalElement.addEventListener('mouseenter', handleMouseEnter)
      terminalElement.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (terminalElement) {
        terminalElement.removeEventListener('mousemove', handleMouseMove)
        terminalElement.removeEventListener('mouseenter', handleMouseEnter)
        terminalElement.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [generateRandomText])

  return (
    <div className='w-full shadow rounded-2xl dark:bg-black bg-white border overflow-hidden h-full'>
      <div className='flex justify-between border-b drak:bg-black items-center h-10'>
        <p className='text-xs flex gap-2 items-center pl-2'>
          <SquareTerminal size={16} />
          Administrator: Command Prompt
        </p>
        <div className='flex h-full'>
          <button className='cursor-pointer hover:bg-slate-300 dark:hover:bg-gray-700 h-full w-10 flex items-center justify-center'>
            <Minus size={14} />
          </button>
          <button className='cursor-pointer hover:bg-slate-300 dark:hover:bg-gray-700 h-full w-10 flex items-center justify-center'>
            <Square size={14} />
          </button>
          <button className='cursor-pointer hover:bg-red-700 h-full w-10 flex items-center justify-center'>
            <X size={14} />
          </button>
        </div>
      </div>
      <div ref={terminalRef} className='p-1 text-sm relative'>
        {isHovering && (
          <>
            <div
              className='pointer-events-none absolute text-green-500 text-opacity-80 z-10 w-30 h-30 break-words rounded-full overflow-hidden'
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: 'translate(-50%, -50%)',
                textShadow: '0 0 8px rgba(0, 255, 0, 0.8)'
              }}
            >
              {hoverText}
            </div>
          </>
        )}
        <div>
          <p>Microsoft Windows [Version 21.04.2000]</p>
          <p>(c) Microsoft Corporation. All rights reserved.</p>
          <div className='mt-4'>
            <TypingText text='C:\DongDev\Portfolio\next dev --turbopack' speed={80} onComplete={handleTypingComplete} />
            {isTypingComplete && <AnimatedText lines={animatedLines} speed={1000} className='mt-2 pb-2 px-2' />}
          </div>
        </div>
      </div>
    </div>
  )
}
