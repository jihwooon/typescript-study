import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import BooksEmpty from "./BooksEmpty";
import { BrowserRouter } from "react-router-dom";

describe("BooksEmpty 컴포넌트", () => {
  describe("검색 결과가 없을 때", () => {
    it("안내 메시지와 전체 검색 링크가 렌더링되어야 합니다.", () => {
      const { getByText } = render(
        <BrowserRouter>
          <BookStoreThemeProvider>
            <BooksEmpty />
          </BookStoreThemeProvider>
        </BrowserRouter>,
      );

      expect(getByText("검색 결과가 없습니다.")).toBeInTheDocument();
      expect(getByText("전체 검색 결과로 이동")).toBeInTheDocument();
    });
  });

  describe("전체 검색 결과 안내 메세지가 나왔을 떼", () => {
    it("검색 링크가 올바르게 렡더링 되어야 합니다.", () => {
      render(
        <BrowserRouter>
          <BookStoreThemeProvider>
            <BooksEmpty />
          </BookStoreThemeProvider>
        </BrowserRouter>,
      );

      const link = screen.getByText("전체 검색 결과로 이동");
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", "/books");
    });
  });
});
