import type { models } from '@/constants'

export type CurrentStage = 1 | 2 | 3 | 4 | null
export type Model = keyof typeof models
