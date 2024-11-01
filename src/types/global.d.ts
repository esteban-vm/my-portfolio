import type { Fonts, Models } from '@/constants'

type NeonColorVariant = 'light' | 'dark'

declare global {
  namespace Types {
    type FontName = typeof Fonts
    type ModelName = keyof typeof Models
    type NeonColor = `green-${NeonColorVariant | `${NeonColorVariant}er`}` | `magenta-${NeonColorVariant}` | 'yellow'
    type SceneStage = 1 | 2 | 3 | 4 | null
  }
}

export {}
