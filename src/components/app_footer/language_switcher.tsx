import type { InputHTMLAttributes } from 'react'
import Image from 'next/image'
import { spFlag, ukFlag } from '@/images'
import { clsx } from '@/utils'

interface LanguageSwitcherProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  const classes = clsx(
    'pointer-events-auto relative cursor-pointer align-middle font-bold text-neon-green-light outline-none',
    '~w-16/24 before:absolute before:top-1/2 before:w-full before:-translate-y-1/2 before:rounded-full',
    'before:bg-neon-green-light before:content-[""] before:~h-8/12 after:absolute after:top-1/2',
    'after:box-border after:flex after:-translate-y-1/2 after:items-center after:justify-center',
    'after:rounded-full after:border-2 after:border-neon-green-light after:bg-black after:content-["ES"]',
    'after:~size-8/12 default:after:left-0 checked:after:right-0 checked:after:content-["EN"] hover:opacity-95'
  )

  return (
    <div className='inline select-none text-center'>
      <Image alt='Spain flag' src={spFlag} />
      &nbsp;
      <input {...props} className={classes} type='checkbox' />
      &nbsp;
      <Image alt='UK flag' src={ukFlag} />
    </div>
  )
}
