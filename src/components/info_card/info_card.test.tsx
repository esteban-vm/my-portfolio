import { SceneContextProvider } from '@/contexts'
import { render } from '@/tests'
import InfoCardContent from './info_card.content'

describe(`${InfoCardContent.name}:`, () => {
  it('should render correctly without passing href', () => {
    const { asFragment } = render(
      <SceneContextProvider>
        <InfoCardContent mainText='Test' />
      </SceneContextProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly passing href', () => {
    const { asFragment } = render(
      <SceneContextProvider>
        <InfoCardContent href='/' mainText='Test' />
      </SceneContextProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
