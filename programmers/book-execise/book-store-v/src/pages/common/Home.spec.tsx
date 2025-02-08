import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('홈 컴포넌트를 렌더링하면 "book store" 텍스트가 화면에 보여야 한다.', () => {
    const textElement = screen.getByText(/home/i)

    expect(textElement).toHaveTextContent('home');
  })

})
