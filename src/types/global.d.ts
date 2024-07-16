type NeonColorVariant = 'light' | 'dark'

declare global {
  type CurrentStage = 1 | 2 | 3 | 4 | null
  type FontName = 'balsamiq' | 'montserrat' | 'saiba45'
  type ModelType = keyof typeof import('@/constants').Models
  type NeonColor = `green-${NeonColorVariant | `${NeonColorVariant}er`}` | `magenta-${NeonColorVariant}` | 'yellow'
}

export {}
