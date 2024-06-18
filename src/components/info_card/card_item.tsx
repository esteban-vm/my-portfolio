import type { Route } from 'next'
import Link from 'next/link'
import { useSceneContext } from '@/contexts'

interface CardItemProps {
  route?: Route
  mainText: string
  linkText?: string
}

export default function CardItem({ route, mainText, linkText = 'test' }: CardItemProps) {
  const { setIsAnimated } = useSceneContext()
  const rotate = () => setIsAnimated(true)
  const stop = () => setIsAnimated(false)

  return (
    <div
      className='absolute left-1/2 top-40 z-10 w-[90%] -translate-x-1/2 animate-blink bg-neon-green-dark p-5 text-center font-bold uppercase text-black transition-all duration-150 hover:animate-pause sm:w-1/2 md:w-2/3 lg:w-1/3'
      onPointerEnter={stop}
      onPointerLeave={rotate}
      onPointerOut={rotate}
      onPointerOver={stop}
    >
      <div className='relative'>
        <p className='line-clamp-3 text-pretty'>{mainText}</p>
        {route && (
          <Link
            className='absolute left-1/2 top-full -translate-x-1/2 rounded-md bg-neon-green-darker px-4 py-3'
            href={route}
          >
            {linkText}
          </Link>
        )}
      </div>
    </div>
  )
}
