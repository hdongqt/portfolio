import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CodeXml, Download, Eye, Facebook, Github, GithubIcon, Mail, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import Bubble from '@/components/bubble'
import ModelViewer from '@/components/model-viewer'
import CornerJumpAnimation from '@/components/CornerJumpAnimation'

import antdIcon from '@/public/images/antd.png'
import figmaIcon from '@/public/images/figma.png'
import gitIcon from '@/public/images/git.png'
import javascriptIcon from '@/public/images/javascript.png'
import moongodbIcon from '@/public/images/moongodb.png'
import nextjsIcon from '@/public/images/nextjs.png'
import nodejsIcon from '@/public/images/nodejs.png'
import reactIcon from '@/public/images/reactjs.png'
import reduxIcon from '@/public/images/redux.png'
import tailwindIcon from '@/public/images/tailwind.png'
import typescriptIcon from '@/public/images/typescript.png'
import postgreIcon from '@/public/images/postgre.png'
import materialIcon from '@/public/images/material.png'
import expressIcon from '@/public/images/express.png'
import Command from '@/components/ui/command'
import { FlipSentences } from '@/components/ui/flip-sentences'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { accordionActivities } from '@/data/info'

const skillIcons = [
  { key: 'javascript', name: 'JavaScript', icon: javascriptIcon },
  { key: 'typescript', name: 'TypeScript', icon: typescriptIcon },
  { key: 'nodejs', name: 'Node.js', icon: nodejsIcon },
  { key: 'express', name: 'Express', icon: expressIcon },
  { key: 'react', name: 'React', icon: reactIcon },
  { key: 'nextjs', name: 'Next.js', icon: nextjsIcon },
  { key: 'postgresql', name: 'PostgreSQL', icon: postgreIcon },
  { key: 'moongoDB', name: 'MongoDB', icon: moongodbIcon },
  { key: 'redux', name: 'Redux', icon: reduxIcon },
  { key: 'antd', name: 'Ant Design', icon: antdIcon },
  { key: 'figma', name: 'Figma', icon: figmaIcon },
  { key: 'git', name: 'Git', icon: gitIcon },
  { key: 'tailwind', name: 'Tailwind CSS', icon: tailwindIcon },
  { key: 'materialIcon', name: 'Material UI', icon: materialIcon }
]

export default function Home() {
  return (
    <div>
      <section className='relative pt-20 pb-40 dark:bg-black bg-gray-100 scroll-mt-20'>
        <Bubble />
        <div className='max-w-7xl flex mx-auto flex-wrap'>
          <div className='w-full lg:w-3/5 relative z-10 flex max-w-7xl mx-auto justify-center text-white px-6 gap-10'>
            <Card className='w-full dark:bg-gradient-to-r from-gray-900 py-0 to-black rounded-2xl flex flex-col lg:flex-row items-stretch gap-10'>
              <div className='flex-1 py-12 pl-6'>
                <div className='font-bold'>
                  <span className='text-red-500 animated-color-text text-3xl md:text-5xl'> Dong Dev.</span>
                  <FlipSentences
                    className='mt-2 text-lg'
                    sentences={[
                      'Frontend Developer',
                      'ReactJS Enthusiast',
                      'Next.js Practitioner',
                      'TypeScript Lover',
                      'Clean Code Advocate',
                      'Web Performance Fanatic'
                    ]}
                  />
                </div>
                <p className='mt-3 text-sm'>
                  Hello, World! I am Huu Dong — a Frontend Developer passionate about building fast, reliable, and
                  user-friendly web applications.
                </p>
                <p className='mt-3 text-sm'>
                  With over 1 year of experience, I specialize in developing high-quality web interfaces using Next.js,
                  React, TypeScript, and modern front-end technologies. I'm always eager to explore new tools and
                  frameworks, and I enjoy turning ideas into real products through hands-on projects and continuous
                  learning.
                </p>
              </div>
              <div className='w-full lg:w-1/3 flex justify-center'>
                <ModelViewer />
              </div>
            </Card>
          </div>
          <div className='w-full lg:w-2/5 px-6 lg:px-0 overflow-hidden relative z-10 mt-4 lg:mt-0 h-[350px] lg:h-auto'>
            <Command />
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-7xl mx-auto px-6 py-20'>
          {/* Left about */}
          <div className='flex flex-col lg:flex-row justify-between gap-10'>
            <div className='flex gap-4 p-10 border rounded-lg items-center flex-col lg:flex-row'>
              <div className='flex-1 text-center'>
                <p className='text-4xl'>Tech Stack</p>
                <p className='text-lg'>Currently I Am Using</p>
              </div>
              <div className='w-full md:w-1/2'>
                <CornerJumpAnimation skillIcons={skillIcons} />
              </div>
            </div>
            <div className='w-full lg:w-2/4 flex flex-col gap-y-4 justify-between'>
              <div className='p-4 h-40 border rounded-lg'>
                <div className='flex w-full h-full overflow-hidden rounded'>
                  <div
                    className={`w-full group relative overflow-hidden transition-all duration-500 dark:bg-slate-800 dark:hover:bg-slate-800/70 flex flex-col items-center justify-center
                         ease-in-out flex-1 hover:flex-2/6`}
                  >
                    <span className='text-blue-600'>
                      <CodeXml size={30} />
                    </span>
                    <p className='cursor-default hidden group-hover:block min-w-max'>Clean Code</p>
                  </div>
                  <div
                    className={`w-full group relative overflow-hidden transition-all duration-500 dark:bg-slate-800 dark:hover:bg-slate-800/70 border-l border-r flex flex-col items-center justify-center
                         ease-in-out flex-1 hover:flex-2/6`}
                  >
                    <span className='text-green-600'>
                      <ShieldCheck size={30} />
                    </span>
                    <p className='cursor-default hidden group-hover:block min-w-max'>High Quality</p>
                  </div>
                  <div
                    className={`w-full group relative overflow-hidden transition-all duration-500 dark:bg-slate-800 dark:hover:bg-slate-800/70 flex flex-col items-center justify-center
                         ease-in-out flex-1 hover:flex-2/6`}
                  >
                    <span className='text-pink-400'>
                      <Eye size={30} />
                    </span>
                    <p className='cursor-default hidden group-hover:block min-w-max'>User Friendly</p>
                  </div>
                </div>
              </div>
              <div className='p-4 border rounded-lg flex items-center justify-between z-20'>
                <span>My CV</span>
                <div className='flex gap-4 items-center'>
                  <a href='/public/pdf/CV_Hoang_Huu_Dong_Frontend.pdf' download='CV_Hoang_Huu_Dong_Frontend.pdf'>
                    <Download className='hover:text-green-500 transition' />
                  </a>
                </div>
              </div>
              <div className='p-4 border rounded-lg flex gap-5 justify-center items-center'>
                <Link
                  href={'https://fb.com/dong.do.2104'}
                  target='_blank'
                  className='border p-2 rounded-lg hover:bg-blue-600 hover:text-white transition'
                >
                  <Facebook />
                </Link>
                <Link
                  href={'https://github.com/hdongqt'}
                  target='_blank'
                  className='border p-2 rounded-lg hover:bg-gray-600 hover:text-white transition'
                >
                  <Github />
                </Link>
                <Link
                  href='mailto:hdongqt@gmail.com'
                  className='border p-2 rounded-lg hover:bg-red-600 hover:text-white transition'
                >
                  <Mail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 py-8'>
        <div className='marquee uppercase'>
          <div className='track'>
            {Array.from({ length: 20 }).map((___, index) => (
              <p className='dark:text-white inline-block pr-7 text-lg italic' key={`${index}port`}>
                ❤️ Portfolio ❤️
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 py-20 relative z-2' id='activities'>
        <p className='text-2xl mb-2'>Activity:</p>
        <Accordion type='single' collapsible className='w-full'>
          {accordionActivities.map(({ value, trigger, contents }) => (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger>{trigger}</AccordionTrigger>
              {contents.map((content, idx) => (
                <AccordionContent key={idx}>{content}</AccordionContent>
              ))}
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  )
}
