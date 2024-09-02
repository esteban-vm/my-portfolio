import type { Metadata } from 'next'
import { ContactScene } from '@/scenes'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <section className='flex flex-col-reverse items-start justify-between gap-1 p-1 sm:flex-row'>
      <form className='h-3/4 w-full border border-white sm:h-full sm:w-3/5 md:w-2/3'>Form</form>
      <ContactScene />
    </section>
  )
}
