import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('컴포넌트를 렌더링하면, Vitest 텍스트가 화면에 보여야 한다.', () => {
    render(<App />)

    const textElement = screen.getByText(/book store/i)

    expect(textElement).toBeInTheDocument();
  })
})
