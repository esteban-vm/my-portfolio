import type { HTMLAttributes } from 'react'
import { useSceneContext } from '@/contexts'
import { clsx } from '@/utils'

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function Wrapper(props: WrapperProps) {
  const { setIsAnimated } = useSceneContext()
  const rotate = () => setIsAnimated(true)
  const stop = () => setIsAnimated(false)

  const classes = clsx(
    'absolute left-1/2 top-40 z-10 -translate-x-1/2 animate-blink bg-neon-green-dark text-center',
    'font-semibold uppercase text-black transition-all ~text-xs/base ~w-80/[36rem] ~p-3/5 hover:paused'
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
