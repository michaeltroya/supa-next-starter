import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// All the providers you need for tests can go here : Theme, Redux, etc.
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { ...options })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
