import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { describe, expect, it } from "vitest";
import { BookStoreThemeProvider } from "../../context/themeContext";

describe("Footer 컴포넌트", () => {
  describe("로고 이미지지가 주어지면", () => {
    it("렌더링되어야 합니다", () => {
      render(
        <BookStoreThemeProvider>
          <Footer />
        </BookStoreThemeProvider>,
      );

      const logoImage = screen.getByAltText("book store");

      expect(logoImage).toBeInTheDocument();
      expect(logoImage).toHaveAttribute("src", "/src/assert/images/logo.png");
    });
  });

  describe("저작권 텍스트가 주어지면", () => {
    it("올바르게 표시되어야 합니다.", () => {
      render(
        <BookStoreThemeProvider>
          <Footer />
        </BookStoreThemeProvider>,
      );
      const copyrightText = screen.getByText(
        /copyright\(c\), 2024, book store/i,
      );

      expect(copyrightText).toBeInTheDocument();
    });
  });

  describe("Footer에 기본 스타일이 올바르면", () => {
    it("올바르게 적용되어야 합니다.", () => {
      render(
        <BookStoreThemeProvider>
          <Footer />
        </BookStoreThemeProvider>,
      );

      const footer = screen.getByRole("contentinfo");

      expect(footer).toHaveStyle("max-width: 1020px");
      expect(footer).toHaveStyle("border-top: 1px solid lightgrey");
      expect(footer).toHaveStyle("display: flex");
      expect(footer).toHaveStyle("justify-content: space-between");
    });
  });
});
