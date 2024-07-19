import { SceneContextProvider } from '@/contexts'
import { render, screen, within } from '@/tests'
import InfoCardContent from './info_card.content'

describe(`${InfoCardContent.name}:`, () => {
  let asFragment: () => DocumentFragment
  const mainText = 'Test'

  it('should not render any links without passing href', () => {
    void ({ asFragment } = render(
      <SceneContextProvider>
        <InfoCardContent mainText={mainText} />
      </SceneContextProvider>
    ))

    const mainTextElem = screen.getByRole('paragraph')
    expect(asFragment()).toMatchSnapshot()
    expect(mainTextElem).toBeInTheDocument()
    expect(mainTextElem).toHaveTextContent(mainText)
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('should render a link by passing href', () => {
    void ({ asFragment } = render(
      <SceneContextProvider>
        <InfoCardContent href='/' mainText={mainText} />
      </SceneContextProvider>
    ))

    const linkElem = screen.getByRole('link')
    const linkText = 'Learn more…'
    expect(asFragment()).toMatchSnapshot()
    expect(linkElem).toBeInTheDocument()
    expect(within(linkElem).getByText(linkText)).toBeInTheDocument()
    expect(within(linkElem).getByLabelText(linkText)).toBeInTheDocument()
  })
})
