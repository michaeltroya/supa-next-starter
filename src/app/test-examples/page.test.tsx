import { render, screen } from '@/test/test-utils'
import Page from './page'

it('App Router: Works with Server Components', () => {
  render(<Page />)
  expect(screen.getByRole('heading')).toHaveTextContent('App Router')
})
