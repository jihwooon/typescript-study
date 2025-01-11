import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect } from 'vitest'
import Button from './Button';

const context = describe;

describe('Button Component', () => {
    render(<Button />)

    const buttonElement = screen.getByRole('button', { name: /blue/i })

    context('버튼을 클릭 시', () => {
        test('버튼 색상이 변경된다.', () => {
            fireEvent.click(buttonElement)

            expect(buttonElement).toHaveClass('blue')
            expect(buttonElement).toHaveStyle({
                "background-color": "ButtonFace"
            })

            fireEvent.click(buttonElement)

            expect(buttonElement).toHaveClass('red')
            expect(buttonElement).toHaveStyle({
                "background-color": "ButtonFace"
            })
        });
    })
})
