import type { ReactNode } from 'react'

export default function SubPagesLayout({ children }: { children: ReactNode }) {
  return <div className='container mx-auto flex h-screen items-start justify-center pt-36 text-white'>{children}</div>
}
