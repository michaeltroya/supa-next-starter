import { server } from '@/mocks/server'
import { QueryCache } from '@tanstack/react-query'
import '@testing-library/jest-dom/vitest'

const queryCache = new QueryCache()

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  queryCache.clear()
})

afterAll(() => server.close())
