import { render, screen } from '@/tests'
import StyledLink from './styled_link'

describe(`${StyledLink.name}:`, () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <StyledLink href='/'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>Test</a>
      </StyledLink>
    )

    const linkElem = screen.getByRole('link')
    expect(asFragment()).toMatchSnapshot()
    expect(linkElem).toBeInTheDocument()
    expect(linkElem).toHaveAttribute('href', '/')
    expect(linkElem).toHaveTextContent('Test')
  })
})
