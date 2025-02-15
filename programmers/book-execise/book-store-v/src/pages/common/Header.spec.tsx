import { render, screen } from "@testing-library/react"
import Header from "./Header"
import { BookStoreThemeProvider } from "../../context/themeContext"

describe('Header', () => {
  test('컴포넌트를 렌터링하면 주어진 텍스트가 화면에 보여야 한다.', () => {
    render(
      <BookStoreThemeProvider>
        <Header />
      </BookStoreThemeProvider>,
    )

    const textElement = screen.getByText(/header/i)

    expect(textElement).toBeInTheDocument();
  })
})
