import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import { describe, expect, it } from "vitest";
import { BookStoreThemeProvider } from "../../context/themeContext";

const renderHeader = () => {
  return render(
    <BrowserRouter>
      <BookStoreThemeProvider>
        <Header />
      </BookStoreThemeProvider>
    </BrowserRouter>,
  );
};

describe("Header 컴포넌트", () => {
  describe("로고 이미지가 주어지면", () => {
    it("올바르게 렌더링되어야 합니다.", () => {
      renderHeader();
      const logo = screen.getByAltText("book store");

      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("src", "/src/assert/images/logo.png");
    });
  });

  describe("모든 카테고리 링크가 주어지면", () => {
    it("올바르게 렌더링되어야 합니다", () => {
      renderHeader();
      const categoryLinks = screen.getAllByRole("link", {
        name: /전체|동화|소설|사회/,
      });

      expect(categoryLinks).toHaveLength(4);
      expect(categoryLinks[0]).toHaveAttribute("href", "/books");
      expect(categoryLinks[1]).toHaveAttribute("href", "/books?category_id=0");
      expect(categoryLinks[2]).toHaveAttribute("href", "/books?category_id=1");
      expect(categoryLinks[3]).toHaveAttribute("href", "/books?category_id=2");
    });
  });

  describe("로그인 및 회원가입 링크가 주어지면", () => {
    it("올바르게 렌더링되어야 합니다.", () => {
      renderHeader();

      const loginLink = screen.getByRole("link", { name: /로그인/i });
      const signupLink = screen.getByRole("link", { name: /회원가입/i });

      expect(loginLink).toBeInTheDocument();
      expect(signupLink).toBeInTheDocument();
      expect(loginLink).toHaveAttribute("href", "/login");
      expect(signupLink).toHaveAttribute("href", "/signup");
    });
  });

  describe("Header 컴포넌트 기본 스타일이 주어지면", () => {
    it("올바르게 적용되어야 합니다.", () => {
      renderHeader();

      const header = screen.getByRole("banner");

      expect(header).toHaveStyle("max-width: 1020px");
      expect(header).toHaveStyle("display: flex");
      expect(header).toHaveStyle("justify-content: space-between");
      expect(header).toHaveStyle("align-items: center");
    });
  });
});
