import '@testing-library/jest-dom'
import '@testing-library/jest-dom/vitest'
import { configure } from '@testing-library/react'

beforeAll(() => {
  configure({ throwSuggestions: true })
})
