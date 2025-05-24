import Link from 'next/link'
const accordionActivities = [
  {
    value: 'item-1',
    trigger: '06/2018 - 06/2022',
    contents: ['Studied and graduated with a major in software technology at Hue University of Sciences.']
  },
  {
    value: 'item-2',
    trigger: '10/2022 - 02/2023',
    contents: ['Frontend developer at Flow-Idra company']
  },
  {
    value: 'item-3',
    trigger: '02/2022 - 02/2025',
    contents: ['Complete military service and frontend part time at Flow-Idra company(02/2024- 04/2024)']
  },
  {
    value: 'item-4',
    trigger: '09/2022 - 01/2025',
    contents: [
      'Personal project - Bronze Film',
      <Link
        key='bronze-film-link'
        href='https://bronze-film.vercel.app/'
        className='hover:underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        https://bronze-film.vercel.app/
      </Link>
    ]
  },
  {
    value: 'item-5',
    trigger: '03/2025 - 06/2025',
    contents: ['Freelancer', 'Building a payment solution system for Japanese customers']
  }
]

export { accordionActivities }
