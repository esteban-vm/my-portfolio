import type { InputHTMLAttributes } from 'react'
import Image from 'next/image'
import { spFlag, ukFlag } from '@/images'
import { clsx } from '@/utils'

interface LanguageSwitcherProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  const classes = clsx(
    'pointer-events-auto invisible relative cursor-pointer align-middle font-bold text-neon-green-dark outline-none',
    '~w-16/24 before:visible before:absolute before:top-1/2 before:w-full before:-translate-y-1/2 before:rounded-full',
    'before:bg-transparent before:backdrop-blur-sm before:content-[""] before:~h-8/12 before:link-shadow after:absolute',
    'after:visible after:top-1/2 after:box-border after:flex after:-translate-y-1/2 after:items-center after:justify-center',
    'after:rounded-full after:border-2 after:border-transparent after:bg-black/80 after:content-["ES"] after:~size-8/12',
    'default:after:left-0 checked:after:right-0 checked:after:content-["EN"]'
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
