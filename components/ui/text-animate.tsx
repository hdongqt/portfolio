import { cn } from '@/lib/utils'
import { motion, AnimatePresence, Variants } from 'framer-motion'

interface MotionComponentProps {
  segments: string[] // Array các segment (có thể là các chữ cái)
  startOnView?: boolean // Khi nào bắt đầu animation (khi vào view)
  // finalVariants: {
  //   container: Variants // Các variants cho container (toàn bộ đoạn văn)
  //   item: Variants // Các variants cho từng item (từng chữ cái)
  // }
  staggerTimings: { [key: string]: number } // Thời gian delay giữa các chữ cái
  by?: 'character' | 'line' // Chọn "character" hoặc "line" cho kiểu hiển thị
  segmentClassName?: string // Lớp CSS cho segment
  className?: string // Lớp CSS cho container
  once?: boolean // Chỉ chạy animation một lần
}

const finalVariants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Đặt độ trễ chung cho từng chữ cái
      }
    },
    exit: { opacity: 0 }
  },
  item: {
    hidden: { opacity: 0, y: 20 }, // Đặt vị trí ban đầu cho chữ cái (ẩn đi ở dưới)
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }, // Nhảy lên
    exit: { opacity: 0, y: -20 } // Khi component thoát sẽ dần mờ và đi lên
  }
}

const TextAnimate: React.FC<MotionComponentProps> = ({
  segments,
  startOnView = false,
  staggerTimings,
  by = 'character',
  segmentClassName,
  className,
  once = false,
  ...props
}) => {
  return (
    <AnimatePresence mode='popLayout'>
      <motion.div
        variants={finalVariants.container}
        initial='hidden'
        animate='show'
        exit='exit'
        className={cn('whitespace-pre-wrap', className)}
        viewport={{ once }}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${segment}-${i}`}
            variants={finalVariants.item}
            custom={i * staggerTimings[by]} // Thêm độ trễ cho từng chữ
            className={cn(by === 'line' ? 'block' : 'inline-block whitespace-pre', segmentClassName)}
          >
            {segment}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

export default TextAnimate
