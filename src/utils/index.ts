import type { ModelType } from '@/types'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { models } from '@/constants'

export const getModelPath = <T extends ModelType>(model: T) => <const>`/models/${models[model]}.glb`

const customClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { customClsx as clsx }
