// @vitest-environment node
import { NextRequest } from 'next/server'
import { redirect } from 'next/navigation'
import { createClient } from '@/supabase/server'
import { GET } from './route'
import { beforeEach, expect, it, vi } from 'vitest'

vi.mock('@/supabase/server', () => ({ createClient: vi.fn() }))
vi.mock('next/navigation', () => ({
  redirect: vi.fn((url: string) => {
    throw new Error(`redirect:${url}`)
  }),
}))

const verifyOtp = vi.fn()

beforeEach(() => {
  verifyOtp.mockResolvedValue({ error: null })
  vi.mocked(createClient).mockResolvedValue({
    auth: { verifyOtp },
  } as unknown as Awaited<ReturnType<typeof createClient>>)
})

it.each([
  ['/protected?tab=profile', 'http://localhost:3000/protected?tab=profile'],
  ['https://example.com', 'http://localhost:3000/'],
  ['//example.com', 'http://localhost:3000/'],
  ['/\\example.com', 'http://localhost:3000/'],
  ['javascript:alert(1)', 'http://localhost:3000/'],
  ['http://[', 'http://localhost:3000/'],
  ['http://localhost:3000//example.com', 'http://localhost:3000//example.com'],
])(
  'keeps the confirmation redirect on this origin: %s',
  async (next, expected) => {
    const params = new URLSearchParams({
      token_hash: 'token',
      type: 'email',
      next,
    })
    await expect(
      GET(new NextRequest(`http://localhost:3000/auth/confirm?${params}`)),
    ).rejects.toThrow(`redirect:${expected}`)
    expect(redirect).toHaveBeenCalledWith(expected)
  },
)

it('encodes verification errors in the error redirect', async () => {
  verifyOtp.mockResolvedValue({ error: { message: 'Invalid & expired?token' } })
  await expect(
    GET(
      new NextRequest(
        'http://localhost:3000/auth/confirm?token_hash=x&type=email',
      ),
    ),
  ).rejects.toThrow('redirect:/auth/error?error=Invalid+%26+expired%3Ftoken')
})

it('rejects missing confirmation credentials before creating a client', async () => {
  await expect(
    GET(new NextRequest('http://localhost:3000/auth/confirm')),
  ).rejects.toThrow('redirect:/auth/error?error=No token hash or type')
  expect(createClient).not.toHaveBeenCalled()
})
