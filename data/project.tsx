import monitoringMatrixThumb from '@/public/images/projects/monitoring.png'
import monitoringMatrix1 from '@/public/images/projects/monitoring1.png'
import monitoringMatrix2 from '@/public/images/projects/monitoring2.png'
import monitoringMatrix3 from '@/public/images/projects/monitoring3.png'

import idraImage from '@/public/images/projects/idra.png'
import idra1 from '@/public/images/projects/idra1.png'
import idra2 from '@/public/images/projects/idra2.png'

import bronzeFilmThumb from '@/public/images/projects/film.png'
import film1 from '@/public/images/projects/film1.png'
import film2 from '@/public/images/projects/film2.png'
import film3 from '@/public/images/projects/film3.png'
import film4 from '@/public/images/projects/film4.png'

import paymentThumb from '@/public/images/projects/payment.png'
import payment1 from '@/public/images/projects/payment1.png'
import payment2 from '@/public/images/projects/payment2.png'
import payment3 from '@/public/images/projects/payment3.png'
import payment4 from '@/public/images/projects/payment4.png'

const projects = [
  {
    title: 'Monitoring Matrix',
    thumbnail: monitoringMatrixThumb,
    tags: ['ReactJS', 'TypeScript', 'MUI', 'Redux'],
    description:
      'Build a website for annual statistics and reports on residential environment of some European countries ',
    images: [monitoringMatrix1, monitoringMatrix2, monitoringMatrix3]
  },
  {
    title: 'IDRA Company Website',
    thumbnail: idraImage,
    tags: ['ReactJS', 'TypeScript', 'Redux'],
    description: 'Build company introduction website',
    images: [idra1, idra2]
  },
  {
    title: 'Bronze Film',
    thumbnail: bronzeFilmThumb,
    tags: ['ReactJS', 'TypeScript', 'TailwindCSS', 'Redux'],
    description: 'Build a website to get daily movie data, manage movies and watch movies for users',
    images: [film1, film2, film3, film4]
  },
  {
    title: 'Payment System',
    thumbnail: paymentThumb,
    tags: ['ReactJS', 'TypeScript', 'Ant Design', 'Redux'],
    description: ' Building a payment solution system for Japanese customers',
    images: [payment1, payment2, payment3, payment4]
  }
]

export { projects }
