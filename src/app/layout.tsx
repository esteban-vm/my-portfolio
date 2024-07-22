import '@/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { AppFooter, AppHeader } from '@/components'
import { clsx } from '@/utils'

export const metadata: Metadata = {
  description: "Esteban V.M.'s portfolio website",
  authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={process.env.NODE_ENV === 'development'}>
        <main className={clsx('relative h-screen bg-black', balsamiq.variable, montserrat.variable, saiba45.variable)}>
          <AppHeader />
          {children}
          <AppFooter />
        </main>
      </body>
    </html>
  )
}

const balsamiq = localFont({
  variable: '--font-balsamiq' satisfies AppTypes.FontVariables['balsamiq'],
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/Balsamiq-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Balsamiq-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Balsamiq-bold.woff2', weight: '700', style: 'bold' },
  ],
})

const montserrat = localFont({
  variable: '--font-montserrat' satisfies AppTypes.FontVariables['montserrat'],
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/Montserrat-regular.woff2', style: 'normal' },
    { path: '../../public/fonts/Montserrat-italic.woff2', style: 'italic' },
  ],
})

const saiba45 = localFont({
  variable: '--font-saiba45' satisfies AppTypes.FontVariables['saiba45'],
  display: 'swap',
  fallback: ['cursive'],
  src: '../../public/fonts/SAIBA-45.woff2',
})
