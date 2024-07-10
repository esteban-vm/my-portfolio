import type { HTMLAttributes } from 'react'
import { useSceneContext } from '@/contexts'
import { clsx } from '@/utils'

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function Wrapper(props: WrapperProps) {
  const { setIsAnimated } = useSceneContext()
  const rotateScene = () => setIsAnimated(true)
  const stopScene = () => setIsAnimated(false)

  const classes = clsx(
    'absolute left-1/2 top-[14vh] z-10 -translate-x-1/2 animate-blink',
    'rounded-md bg-neon-green-dark text-center font-semibold uppercase text-black',
    '~w-80/[36rem] ~p-3/5 hover:paused md:top-[15vh] lg:top-[16vh]'
  )

  return (
    <div
      {...props}
      className={classes}
      onPointerEnter={stopScene}
      onPointerLeave={rotateScene}
      onPointerOut={rotateScene}
      onPointerOver={stopScene}
    />
  )
}
