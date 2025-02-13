import { render, screen } from "@testing-library/react"
import Title from "./Title"
import { BookStoreThemeProvider } from "../../context/themeContext"

describe('Title', () => {
  test('컴포넌트를 렌터링하면 주어진 텍스트가 화면에 보여야 한다.', () => {
    render(
      <BookStoreThemeProvider>
        <Title size="medium">제목</Title>
      </BookStoreThemeProvider>,
    )

    expect(screen.getByText('제목')).toBeInTheDocument();
  })

  it('size props 적용', () => {
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>,
    );

    expect(container?.firstChild).toHaveStyle({
      fontSize: "2rem",
    });
  })
})
