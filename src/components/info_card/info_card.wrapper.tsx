import type { HTMLAttributes } from 'react'
import { useSceneContext } from '@/contexts'
import { clsx } from '@/utils'

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function Wrapper(props: WrapperProps) {
  const { setIsAnimated } = useSceneContext()
  const rotate = () => setIsAnimated(true)
  const stop = () => setIsAnimated(false)

  const classes = clsx(
    'absolute left-1/2 top-40 z-10 w-[90%] -translate-x-1/2 animate-blink bg-neon-green-dark p-5 text-center',
    'font-semibold uppercase text-black transition-all ~text-xs/base hover:paused sm:w-1/2 md:w-2/3 lg:w-1/3'
  )

  return (
    <div
      {...props}
      className={classes}
      onPointerEnter={stop}
      onPointerLeave={rotate}
      onPointerOut={rotate}
      onPointerOver={stop}
    />
  )
}
