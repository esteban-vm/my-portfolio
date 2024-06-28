import type { HTMLAttributes } from 'react'

interface WrapperProps extends HTMLAttributes<HTMLElement> {}

export default function Wrapper(props: WrapperProps) {
  return (
    <header
      {...props}
      className='container pointer-events-none absolute left-1/2 top-14 z-20 -translate-x-1/2 select-none [&_a]:pointer-events-auto'
    />
  )
}
