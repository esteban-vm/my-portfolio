import type { Route } from 'next'

export type CurrentStage = 1 | 2 | 3 | 4 | null
export type ModelFilename = `cyberpunk_${'city' | 'ghetto_delorean'}` | 'cute_home_robot'

export interface NavLink {
  title: string
  route: Route
}
