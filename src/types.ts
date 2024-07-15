export type CurrentStage = 1 | 2 | 3 | 4 | null
export type FontType = 'balsamiq' | 'montserrat' | 'saiba45'
export type ModelType = keyof typeof import('@/constants').Models
export type NeonColor = `green-${NeonColorVariant | `${NeonColorVariant}er`}` | `magenta-${NeonColorVariant}` | 'yellow'

type NeonColorVariant = 'light' | 'dark'
