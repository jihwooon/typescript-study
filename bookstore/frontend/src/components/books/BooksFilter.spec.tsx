import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import BooksFilter from "./BooksFilter";

describe("BooksFilter 컴포넌트", () => {
  describe("카테고리 버튼들이 주어지면", () => {
    it("렌더링 되어야 합니다.", () => {
      const { getByText } = render(
        <BookStoreThemeProvider>
          <BooksFilter />
        </BookStoreThemeProvider>,
      );

      expect(getByText("전체")).toBeInTheDocument();
      expect(getByText("동화")).toBeInTheDocument();
      expect(getByText("소설")).toBeInTheDocument();
      expect(getByText("사회")).toBeInTheDocument();
    });
  });

  describe("신간 버튼이 주어지면", () => {
    it("렌더링 되어야 합니다", () => {
      const { getByText } = render(
        <BookStoreThemeProvider>
          <BooksFilter />
        </BookStoreThemeProvider>,
      );

      expect(getByText("신간")).toBeInTheDocument();
    });
  });

  describe("카테고리 및 신간 버튼들에 올바른 텍스트 내용이 주어지면", () => {
    it("렌더링되어야 합니다", () => {
      render(
        <BookStoreThemeProvider>
          <BooksFilter />
        </BookStoreThemeProvider>,
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons[0]).toHaveTextContent("전체");
      expect(buttons[1]).toHaveTextContent("동화");
      expect(buttons[2]).toHaveTextContent("소설");
      expect(buttons[3]).toHaveTextContent("사회");
    });
  });
});
