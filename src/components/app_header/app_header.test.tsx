import { render, screen } from '@/tests'
import AppHeader from './app_header'

describe(`${AppHeader.name}:`, () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AppHeader />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
