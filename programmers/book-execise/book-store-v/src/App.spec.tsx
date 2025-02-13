import { render, screen } from '@testing-library/react'
import App from './App'
import { BookStoreThemeProvider } from './context/themeContext'

describe('App', () => {
  it('컴포넌트를 렌더링하면, Vitest 텍스트가 화면에 보여야 한다.', () => {
    render(
      <BookStoreThemeProvider>
        <App />
      </BookStoreThemeProvider>,
    )

    const textElement = screen.getByText("제목")

    expect(textElement).toBeInTheDocument();
  })
})
