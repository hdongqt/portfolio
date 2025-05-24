'use client'
import Image from 'next/image'
import React, { useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { projects } from '@/data/project'

const ProjectDetailDialog = ({ data, setProjectSelect }: any) => {
  return (
    <Dialog open={!!data} onOpenChange={(open) => !open && setProjectSelect(null)}>
      <DialogContent className='!max-w-4xl md:w-full w-[90%]'>
        <DialogHeader>
          <DialogTitle>{data?.title}</DialogTitle>
          <DialogDescription>{data?.description}</DialogDescription>
        </DialogHeader>
        <div className='px-10'>
          <Carousel className='w-full'>
            <CarouselContent>
              {data &&
                data.images.map((image: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className='p-1'>
                      <Card className='h-[350px] lg:h-[500px] overflow-hidden py-0 bg-gray-100 dark:bg-gray-400'>
                        <Image
                          src={image}
                          alt={data.title}
                          className='w-full min-h-full h-full object-cover md:object-contain'
                        />
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function page() {
  const [projectSelect, setProjectSelect] = useState<(typeof projects)[0] | null>(null)
  return (
    <>
      <div className='flex gap-4 my-20 max-w-7xl mx-auto flex-wrap justify-center px-6 md:px-0'>
        {projects.map((project) => {
          return (
            <div
              key={project.title}
              className='relative rounded-lg overflow-hidden w-full md:w-[calc(33%-1rem)] lg:w-[calc(25%-1rem)] group cursor-pointer'
              onClick={() => setProjectSelect(project)}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                className='h-[400px] object-cover group-hover:scale-105 transition-all duration-500 ease-in-out'
              />
              <div className='bg-black absolute inset-0 opacity-20' />
              <h2 className='absolute top-4 left-4 text-white font-bold bg-sky-900 py-1 px-2 rounded-lg'>
                {project.title}
              </h2>
              <div className='flex gap-2 absolute bottom-4 right-0 left-0 w-full flex-wrap px-4'>
                {project.tags.map((tag, index) => {
                  return (
                    <span
                      key={`${tag}-${index}-${project.title}`}
                      className='inline-block text-sm dark:bg-gray-800 py-1 rounded-full px-2 bg-sky-600 text-white'
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <ProjectDetailDialog data={projectSelect} setProjectSelect={setProjectSelect} />
    </>
  )
}
