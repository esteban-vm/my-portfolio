import { SceneContextProvider } from '@/contexts'
import { render } from '@/tests'
import Content from './info_card.content'

describe(`${Content.name}:`, () => {
  it('should render correctly without passing href', () => {
    const { asFragment } = render(
      <SceneContextProvider>
        <Content mainText='Test' />
      </SceneContextProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly passing href', () => {
    const { asFragment } = render(
      <SceneContextProvider>
        <Content href='/' mainText='Test' />
      </SceneContextProvider>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
