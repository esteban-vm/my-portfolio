import type { ModelFilename } from '@/types'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const getModelPath = (path: ModelFilename) => `/models/${path}.glb`
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { cn as clsx }
