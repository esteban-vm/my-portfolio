import { PacmanLoader } from 'react-spinners'

type LoadingSpinnerProps = Parameters<typeof PacmanLoader>[0]

export default function LoadingSpinner(props: LoadingSpinnerProps) {
  return <PacmanLoader {...props} aria-label='Loading Spinner' color='#00e0c0' speedMultiplier={2} />
}
