import { PacmanLoader } from 'react-spinners'

type LoadingSpinnerProps = Parameters<typeof PacmanLoader>[0]

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return <PacmanLoader aria-label='Loading Spinner' color='#ff15bc' speedMultiplier={2} {...props} />
}
