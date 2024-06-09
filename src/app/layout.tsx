import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import clsx from 'clsx'
import localFont from 'next/font/local'
import { NavBar } from '@/components'

export const metadata: Metadata = {
  title: 'My Portfolio | Home',
  description: "Esteban V.M.'s portfolio website",
  authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
}

const montserrat = localFont({
  variable: '--font-montserrat',
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    {
      path: '../../public/fonts/Montserrat-regular.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Montserrat-italic.woff2',
      style: 'italic',
    },
  ],
})

const saiba45 = localFont({
  variable: '--font-saiba45',
  display: 'swap',
  fallback: ['cursive'],
  src: '../../public/fonts/SAIBA-45.woff2',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={clsx('relative bg-black', montserrat.variable, saiba45.variable)}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
