import { PacmanLoader } from 'react-spinners'

type LoaderSpinnerProps = Parameters<typeof PacmanLoader>[0]

export default function LoaderSpinner(props: LoaderSpinnerProps) {
  return <PacmanLoader {...props} aria-label='Loading Spinner' color='fuchsia' loading />
}
