export default function UK(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg' {...props}>
      <rect fill='#071b65' height='24' rx='4' ry='4' width='30' x='1' y='4' />
      <path
        d='M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z'
        fill='#fff'
      />
      <path d='M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z' fill='#b92932' />
      <path d='M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z' fill='#b92932' />
      <path
        d='M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z'
        fill='#fff'
      />
      <rect fill='#fff' height='24' width='6' x='13' y='4' />
      <rect fill='#fff' height='6' width='30' x='1' y='13' />
      <rect fill='#b92932' height='24' width='4' x='14' y='4' />
      <rect fill='#b92932' height='30' transform='translate(32) rotate(90)' width='4' x='14' y='1' />
      <path d='M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z' fill='#b92932' />
      <path d='M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z' fill='#b92932' />
      <path
        d='M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z'
        opacity='.15'
      />
      <path
        d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
        fill='#fff'
        opacity='.2'
      />
    </svg>
  )
}
