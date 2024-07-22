import type { Fonts, Models } from '@/constants'

type NeonColorVariant = 'light' | 'dark'

declare global {
  namespace AppTypes {
    type CurrentStage = 1 | 2 | 3 | 4 | null
    type FontVariables = typeof Fonts
    type ModelName = keyof typeof Models
    type NeonColor = `green-${NeonColorVariant | `${NeonColorVariant}er`}` | `magenta-${NeonColorVariant}` | 'yellow'
  }
}

export {}
