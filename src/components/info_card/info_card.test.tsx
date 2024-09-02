import { screen, within, withHomeContext } from '@/tests'
import InfoCard from './info_card'

describe(`${InfoCard.name}:`, () => {
  let asFragment: () => DocumentFragment
  const mainText = 'Test'

  it('should not render any links without passing href', () => {
    void ({ asFragment } = withHomeContext(<InfoCard mainText={mainText} />))
    const mainTextElem = screen.getByRole('paragraph')
    expect(asFragment()).toMatchSnapshot()
    expect(mainTextElem).toBeInTheDocument()
    expect(mainTextElem).toHaveTextContent(mainText)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('should render a link by passing href', () => {
    void ({ asFragment } = withHomeContext(<InfoCard href='/' mainText={mainText} />))
    const linkElem = screen.getByRole('link')
    const linkText = 'Learn more…'
    expect(asFragment()).toMatchSnapshot()
    expect(linkElem).toBeInTheDocument()
    expect(within(linkElem).getByText(linkText)).toBeInTheDocument()
    expect(within(linkElem).getByLabelText(linkText)).toBeInTheDocument()
  })
})
