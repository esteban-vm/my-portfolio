import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { HomeContextProvider } from '@/contexts'

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export const withHomeContext = (ui: ReactElement, options?: Options) => {
  return render(ui, { wrapper: HomeContextProvider, ...options })
}

type Options = Omit<RenderOptions, 'wrapper'>
