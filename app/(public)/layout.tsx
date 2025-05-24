import Header from '@/app/(public)/header'
import FluidCursor from '@/components/layout/fluid-cursor'

export default async function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='flex min-h-screen w-full flex-col relative'>
      <Header />
      <main className='z-20'>{children}</main>
      <footer className='text-sm md:text-base flex items-center justify-center font-semibold text-zinc-600 w-full py-3'>
        © 2025 Dong Dev. All rights reserved.
      </footer>
      <FluidCursor />
    </div>
  )
}
