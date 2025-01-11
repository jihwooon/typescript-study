import {render, screen} from "@testing-library/react"
import {BookStoreThemeProvider} from "../../context/themeContext";
import Button from "./Button";

describe('Button 컴포넌트 테스트', () => {
    it('렌더를 확인한다.', () => {
        render(
            <BookStoreThemeProvider>
                <Button size="large" scheme="primary">버튼 테스트</Button>
            </BookStoreThemeProvider>
        )

        expect(screen.getByText("버튼 테스트")).toBeInTheDocument();
    })

    it('Button color를 확인한다.', () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Button size="large" scheme="primary">버튼 테스트</Button>
            </BookStoreThemeProvider>
        );

        expect(container?.firstChild).toHaveStyle({
            fontSize: "1.5rem"
        })
    })
})
