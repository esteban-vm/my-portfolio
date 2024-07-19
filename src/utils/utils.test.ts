import { clsx, getModelPath } from './utils'

describe(`${getModelPath.name}:`, () => {
  it('should return path for car model', () => {
    expect(getModelPath('car')).toBe('/models/cyberpunk_ghetto_delorean.glb')
  })

  it('should return path for city model', () => {
    expect(getModelPath('city')).toBe('/models/cyberpunk_city.glb')
  })

  it('should return path for robot model', () => {
    expect(getModelPath('robot')).toBe('/models/cute_home_robot.glb')
  })
})

describe(`${clsx.name}:`, () => {
  it('should concatenate class names properly', () => {
    const testClasses = <const>[
      'border-neon-green-dark',
      'bg-neon-magenta-dark',
      'text-neon-green-lighter',
      null && 'outline-neon-green-dark',
    ]

    const result = <const>`${testClasses[0]} ${testClasses[1]} ${testClasses[2]}`
    expect(clsx(...testClasses)).toBe(result)
  })
})
