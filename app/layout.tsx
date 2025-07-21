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
  description: 'Dong Dev',
  keywords: ['Dong Dev', 'Hoàng Hữu Đồng', 'Dong Dev Portfolio', 'Hữu Đồng', 'Dong Wine', 'Hoàng Hữu Đồng Portfolio'],
  verification: {
    google: '8AMUM_GmhT7uAQ0cJcYiptoDGBL4Y9JNXWZbPxuzC-8'
  },
  openGraph: {
    title: 'Đồng Dev',
    description: 'Khám phá các dự án của Đồng',
    images: [
      {
        url: 'https://dongdev-wine.vercel.app/images/show.png',
        width: 1200,
        height: 630,
        alt: 'Dong Dev'
      }
    ],
    url: 'https://dongdev-wine.vercel.app/',
    type: 'website'
  }
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
