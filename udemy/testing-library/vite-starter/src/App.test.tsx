import { logRoles, render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// test('button starts with correct color', () => {
//     const { container } = render(<App />)
//     logRoles(container)

//     const buttonElement = screen.getByRole('button', { name: /red/i}) 
//     expect(buttonElement).toHaveClass('red')
// });

// test('button stats with correct text', () => {
//     const { container } = render(<App />)

//     logRoles(container)

//     const buttonElement = screen.getByRole('button', {name :/blue/i})
     
//     expect(buttonElement).toHaveClass('blue')
// })

test('button has correct color after click', () => {
    const { container } = render(<App/>)

    logRoles(container)

    const buttoneElememnt = screen.getByRole('button', { name: /blue/i })

    fireEvent.click(buttoneElememnt);

    expect(buttoneElememnt).toHaveTextContent(/red/i);
    expect(buttoneElememnt).toHaveStyle({"": ""})

    expect(buttoneElememnt).toHaveClass('blue')
})

test('button has correct text after click', () => {

})