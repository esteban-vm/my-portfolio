import { render, screen } from '@/tests'
import LoadingSpinner from './loading_spinner'

describe(`${LoadingSpinner.name}:`, () => {
  it('should render correctly', () => {
    const { asFragment } = render(<LoadingSpinner />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByLabelText('Loading Spinner')).toBeInTheDocument()
  })
})
