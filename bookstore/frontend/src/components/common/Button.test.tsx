import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트", () => {
  describe("Button 내용이 주어지면", () => {
    test("렌더링이 되어야 합니다.", () => {
      render(
        <BookStoreThemeProvider>
          <Button size="large" scheme="normal">
            Button
          </Button>
        </BookStoreThemeProvider>,
      );

      expect(screen.getByText("Button")).toBeInTheDocument();
    });
  });

  describe("size prop이 'large'이고 scheme이 'primary'일 때", () => {
    test("padding이 '1rem 2rem'으로 렌더링되어야 합니다.", () => {
      const { container } = render(
        <BookStoreThemeProvider>
          <Button size="large" scheme="primary">
            Button
          </Button>
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ padding: "1rem 2rem" });
    });
  });

  describe("size prop이 'large'이고 scheme이 'primary'일 때", () => {
    test("폰트 색상이 'white'로 렌더링되어야 합니다.", () => {
      const white = "rgb(255, 255, 255)";

      const { container } = render(
        <BookStoreThemeProvider>
          <Button size="large" scheme="primary">
            Button
          </Button>
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({
        color: white,
      });
    });
  });

  describe("size prop이 'large'이고 scheme이 'primary'일 때", () => {
    test("배경색이 'midnightblue'로 렌더링되어야 합니다.", () => {
      const midnightblue = "rgb(25, 25, 112)";

      const { container } = render(
        <BookStoreThemeProvider>
          <Button size="large" scheme="primary">
            Button
          </Button>
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({
        backgroundColor: midnightblue,
      });
    });
  });
});
