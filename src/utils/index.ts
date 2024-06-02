import type { ModelFilename } from '@/types'
export const getModelPath = (path: ModelFilename) => `/models/${path}.glb`
