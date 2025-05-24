'use client'
import Link from 'next/link'

import { cx } from 'class-variance-authority'
import { usePathname } from 'next/navigation'
import Logo from '@/components/logo'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

const menuItems: {
  title: string
  href: string
}[] = [
  {
    title: 'About',
    href: '/'
  },
  {
    title: 'Projects',
    href: '/projects'
  }
]

const NavItems = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  return (
    <>
      {menuItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            href={item.href}
            key={item.href}
            className={cx(
              'dark:text-white px-6 py-1.5 rounded-full dark:hover:bg-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out',
              isActive && 'dark:bg-gray-700 dark:hover:bg-gray-700 bg-gray-900 text-white hover:text-white',
              className
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </>
  )
}

const NavItemsMobile = ({ className }: { className?: string }) => {
  const pathname = usePathname()
  return (
    <>
      {menuItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            href={item.href}
            key={item.href}
            className={cx(
              'px-6 mx-2 py-3 rounded-lg dark:hover:bg-gray-600 hover:bg-sky-100 hover:text-black !text-black dark:!text-white transition-all duration-300 ease-in-out',
              isActive && 'dark:bg-gray-700 dark:hover:bg-gray-700 bg-sky-100 text-black dark:text-white',
              className
            )}
          >
            {item.title}
          </Link>
        )
      })}
    </>
  )
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={cx(
        'transition-all sticky top-0 duration-300 ease-linear z-40 flex justify-between h-20 items-center gap-4 border-b bg-background px-4 md:px-10',
        isSticky ? 'md:shadow-sm md:top-4 md:w-[80%] md:border md:rounded-lg md:mx-auto' : 'w-full'
      )}
    >
      <Link href='/'>
        <Logo />
      </Link>
      <nav className='ml-20 container hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center justify-center md:gap-5 md:text-sm lg:gap-6'>
        <NavItems className='transition-colors hover:text-foreground flex-shrink-0 text-base' />
      </nav>
      <div className='ml-auto flex items-center gap-2'>
        <DarkModeToggle />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <SheetTitle></SheetTitle>
          <nav className='grid gap-3 text-lg font-medium'>
            <Link href='/' className='flex items-center gap-2 text-lg font-semibold px-4'>
              <Logo />
            </Link>
            <div className='flex flex-col gap-2 mt-4'>
              <NavItemsMobile className='text-muted-foreground transition-colors hover:text-foreground mt-2' />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
