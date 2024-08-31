import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { GraphicsContextProvider } from '@/contexts'

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export const withGraphicsContext = (ui: ReactElement, options?: WithGraphicsOptions) => {
  return render(ui, { wrapper: GraphicsContextProvider, ...options })
}

type WithGraphicsOptions = Omit<RenderOptions, 'wrapper'>
