import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { BookStoreThemeProvider } from "../../context/themeContext";
import Button from "./Button";

const white = "rgb(255, 255, 255)";
const midnightblue = "rgb(25, 25, 112)";

describe("Button 컴포넌트", () => {
  beforeEach(() => {
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          Button
        </Button>
      </BookStoreThemeProvider>,
    );
  });
  describe("Button 내용이 주어지면", () => {
    test("렌더링이 되어야 합니다.", () => {
      const buttonElement = screen.getByText("Button");

      expect(buttonElement).toBeInTheDocument();
    });
  });

  describe("size prop이 'large'이고 scheme이 'primary'일 때", () => {
    test("스타일이 올바르게 적용되어야 합니다.", () => {
      const buttonElement = screen.getByRole("button");

      expect(buttonElement).toHaveStyle({ padding: "1rem 2rem" });
      expect(buttonElement).toHaveStyle({ color: white });
      expect(buttonElement).toHaveStyle({ backgroundColor: midnightblue });
    });
  });
});
