import type { ReactNode } from 'react'

export default function SubPagesLayout(props: { children: ReactNode }) {
  return (
    <div
      className='container mx-auto flex h-screen items-start justify-center py-[14vh] md:py-[15vh] lg:py-[16vh]'
      {...props}
    />
  )
}
