import { render, screen } from '@/tests'
import AppFooter from './app_footer'

describe(`${AppFooter.name}:`, () => {
  it('should render correctly', () => {
    const { asFragment } = render(<AppFooter />)
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
