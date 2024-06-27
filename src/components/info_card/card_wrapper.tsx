import type { HTMLAttributes } from 'react'
import { useSceneContext } from '@/contexts'

interface CardWrapperProps extends HTMLAttributes<HTMLDivElement> {}

export default function CardWrapper(props: CardWrapperProps) {
  const { setIsAnimated } = useSceneContext()
  const rotate = () => setIsAnimated(true)
  const stop = () => setIsAnimated(false)

  return (
    <div
      {...props}
      className='absolute left-1/2 top-40 z-10 w-[90%] -translate-x-1/2 animate-blink bg-neon-green-dark p-5 text-center font-bold uppercase text-black transition-all duration-150 hover:animate-pause sm:w-1/2 md:w-2/3 lg:w-1/3'
      onPointerEnter={stop}
      onPointerLeave={rotate}
      onPointerOut={rotate}
      onPointerOver={stop}
    />
  )
}
