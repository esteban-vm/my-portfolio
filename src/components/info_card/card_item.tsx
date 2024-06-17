import type { Route } from 'next'
import Link from 'next/link'
import { useSceneContext } from '@/contexts'

interface CardItemProps {
  route?: Route
  mainText: string
  linkText?: string
}

export default function CardItem({ route, mainText, linkText = '' }: CardItemProps) {
  const { setIsAnimated } = useSceneContext()
  const rotate = () => setIsAnimated(true)
  const stop = () => setIsAnimated(false)

  return (
    <div
      className='absolute left-1/2 top-36 z-10 -translate-x-1/2 bg-white p-5 font-bold uppercase text-black'
      onPointerEnter={stop}
      onPointerLeave={rotate}
      onPointerOut={rotate}
      onPointerOver={stop}
    >
      <span>{mainText}</span>
      {route && <Link href={route}>{linkText}</Link>}
    </div>
  )
}
