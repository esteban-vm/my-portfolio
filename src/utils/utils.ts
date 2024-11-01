import type { ModelName } from '@/types'
import type { ClassValue } from 'clsx'
import { withFluid } from '@fluid-tailwind/tailwind-merge'
import { clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { Models } from '@/constants'

const twMerge = extendTailwindMerge(withFluid)

const twClsx = (...classes: ClassValue[]) => twMerge(clsx(classes))

const getModelPath = <T extends ModelName>(model: T) => <const>`/models/${Models[model]}.glb`

export { twClsx as clsx, getModelPath }
