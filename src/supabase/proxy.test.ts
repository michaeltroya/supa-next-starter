// @vitest-environment node
import { createServerClient } from '@supabase/ssr'
import { NextRequest } from 'next/server'
import { beforeEach, expect, it, vi } from 'vitest'
import { updateSession } from './proxy'

vi.mock('@supabase/ssr', () => ({ createServerClient: vi.fn() }))
vi.mock('@/utils/env', () => ({ hasEnvVars: true }))

const getClaims = vi.fn()
const cacheHeaders = {
  'Cache-Control': 'private, no-store',
  Expires: '0',
  Pragma: 'no-cache',
}

beforeEach(() => {
  vi.mocked(createServerClient).mockReturnValue({
    auth: { getClaims },
  } as unknown as ReturnType<typeof createServerClient>)
})

it.each([true, false])(
  'preserves refresh cookies and cache headers (signed in: %s)',
  async (signedIn) => {
    getClaims.mockImplementation(async () => {
      const options = vi.mocked(createServerClient).mock.calls[0][2]
      await options.cookies.setAll?.(
        [
          {
            name: 'session',
            value: 'refreshed',
            options: { path: '/', httpOnly: true },
          },
        ],
        cacheHeaders,
      )
      await options.cookies.setAll?.(
        [{ name: 'verifier', value: '', options: { path: '/', maxAge: 0 } }],
        {},
      )
      return { data: signedIn ? { claims: { sub: 'user-id' } } : null }
    })

    const request = new NextRequest('http://localhost:3000/protected')
    const response = await updateSession(request)

    expect(request.cookies.get('session')?.value).toBe('refreshed')
    expect(response.cookies.get('session')?.value).toBe('refreshed')
    for (const [name, value] of Object.entries(cacheHeaders)) {
      expect(response.headers.get(name)).toBe(value)
    }
    expect(response.status).toBe(signedIn ? 200 : 307)
    if (!signedIn) {
      expect(response.headers.get('location')).toBe(
        'http://localhost:3000/auth/login',
      )
    }
  },
)
