import { render, screen, fireEvent } from '@testing-library/react'
import App from "./App"
import { expect } from 'vitest'

function renderApp() {
    return render(<App />)
}

test('button starts with correct label and color', () => {
    renderApp()

    const buttonElement = screen.getByRole("button", { name: /blue/i });

    expect(buttonElement).toHaveClass("red");
    expect(buttonElement).toHaveStyle({
        "background-color": "rgb(255, 0, 0)"
    })

    fireEvent.click(buttonElement)

    expect(buttonElement).toHaveStyle({
        "background-color": "rgb(0, 0, 255)"
    })
})


test('checkbox flow', () => {
    renderApp()

    const buttonElement = screen.getByRole('button', { name: /blue/i })
    const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i })

    expect(buttonElement).toBeEnabled();

    expect(checkboxElement).not.toBeChecked();
})

/* 체크박스 값에 버튼 활성화 여부 테스트 */
test('checkbox enable', () => {
    //App 렌터링 호출.
    renderApp()
    
    // 버튼과 체크박스 요소를 호출
    const buttonElement = screen.getByRole('button', { name: /blue/i })
    const checkboxElement = screen.getByRole('checkbox', { name: /disable button/i });

    // 버튼과 체크박스 초기 상태 확인
    expect(buttonElement).toBeEnabled();
    expect(checkboxElement).not.toBeChecked();

    // 체크박스를 클릭 시 버튼은 비활성화
    fireEvent.click(checkboxElement)
    expect(buttonElement).toBeDisabled();

    // 체크박스를 다시 클릭 시 버튼이 활성화
    fireEvent.click(checkboxElement)
    expect(buttonElement).toBeEnabled();
})
