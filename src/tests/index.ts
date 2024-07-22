import type { RenderOptions } from '@testing-library/react'
import type { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { SceneContextProvider } from '@/contexts'

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

export const withSceneProvider = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  return render(ui, { wrapper: SceneContextProvider, ...options })
}
