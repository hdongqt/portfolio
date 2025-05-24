import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter as FontSans, JetBrains_Mono as FontMono } from 'next/font/google'

import './globals.css'
import { cn } from '@/lib/utils'
import AppProvider from '@/components/app-provider'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Hoàng Hữu Đồng | Dong Dev',
  description: 'Dong Dev'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning className='scroll-smooth'>
      <body
        className={cn('min-h-screen bg-background font-mono antialiased', fontSans.variable, fontMono.variable)}
        cz-shortcut-listen='true'
      >
        <AppProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  )
}
