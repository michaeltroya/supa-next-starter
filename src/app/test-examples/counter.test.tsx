import { userEvent, render, screen } from '@/test/test-utils'
import Counter from './counter'

it('App Router: Works with Client Components (React State)', async () => {
  render(<Counter />)

  expect(screen.getByText('0')).toBeInTheDocument()

  await userEvent.click(screen.getByRole('button'))

  expect(screen.getByText('1')).toBeInTheDocument()
})
