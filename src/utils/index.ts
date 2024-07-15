import type { ModelType } from '@/types'
import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Models } from '@/constants'

const twClsx = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
const getModelPath = <T extends ModelType>(model: T) => <const>`/models/${Models[model]}.glb`

export { twClsx as clsx, getModelPath }
