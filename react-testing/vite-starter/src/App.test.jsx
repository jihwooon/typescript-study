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