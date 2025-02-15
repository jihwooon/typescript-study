import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe('Footer', () => {
  test('컴포넌트를 렌터링하면 주어진 텍스트가 화면에 보여야 한다.', () => {
    render(<Footer />)

    const textElement = screen.getByText(/copy/i)

    expect(textElement).toBeInTheDocument();
  })
})
