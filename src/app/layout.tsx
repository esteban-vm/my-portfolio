import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { AppFooter, AppHeader } from '@/components'
import { GraphicsContextProvider } from '@/contexts'
import { clsx } from '@/utils'

export const metadata: Metadata = {
  title: { default: 'My Portfolio', template: 'My Portfolio | %s' },
  description: "Esteban V.M.'s portfolio website",
  keywords: ['Front-End Developer', 'Web Design', 'Next.js', 'React'],
  authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
  generator: 'Next.js',
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={process.env.NODE_ENV === 'development'}>
        <main className={clsx('relative h-screen bg-black', balsamiq.variable, montserrat.variable, saiba45.variable)}>
          <AppHeader />
          <GraphicsContextProvider {...props} />
          <AppFooter />
        </main>
      </body>
    </html>
  )
}

const balsamiq = localFont({
  variable: '--font-balsamiq' satisfies AppTypes.FontName['balsamiq'],
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/Balsamiq-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Balsamiq-italic.woff2', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Balsamiq-bold.woff2', weight: '700', style: 'bold' },
  ],
})

const montserrat = localFont({
  variable: '--font-montserrat' satisfies AppTypes.FontName['montserrat'],
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/Montserrat-regular.woff2', style: 'normal' },
    { path: '../../public/fonts/Montserrat-italic.woff2', style: 'italic' },
  ],
})

const saiba45 = localFont({
  variable: '--font-saiba45' satisfies AppTypes.FontName['saiba45'],
  display: 'swap',
  fallback: ['cursive'],
  src: '../../public/fonts/SAIBA-45.woff2',
})
