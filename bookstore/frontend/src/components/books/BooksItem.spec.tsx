import { describe, expect, it } from "vitest";
import { Book } from "../../models/book.model";
import { render, screen } from "@testing-library/react";
import { BookStoreThemeProvider } from "../../context/themeContext";
import BooksItem from "./BooksItem";

const dummaryBook: Book = {
  id: 1,
  title: "Dummy Book",
  detail: "Dummay Detail",
  img: 5,
  category_id: 1,
  summary: "Dummay Summary",
  author: "Dummay Author",
  price: 10000,
  likes: 1,
  form: "paperback",
  isbn: "Dummay isbn",
  pages: 1000,
  contents: "Dummay Contents",
  pubDate: "2021-01-01",
};

describe("BooksItem 컴포넌트", () => {
  describe("책 정보가 주어지면", () => {
    it("렌더링 되어야 합니다.", () => {
      const { getByText, getByAltText } = render(
        <BookStoreThemeProvider>
          <BooksItem book={dummaryBook} />
        </BookStoreThemeProvider>,
      );

      expect(getByText(dummaryBook.title)).toBeInTheDocument();
      expect(getByText(dummaryBook.summary)).toBeInTheDocument();
      expect(getByText(dummaryBook.author)).toBeInTheDocument();
      expect(getByText("10,000원")).toBeInTheDocument();
      expect(getByText(dummaryBook.likes)).toBeInTheDocument();
      expect(getByAltText(dummaryBook.title)).toHaveAttribute(
        "src",
        `https://picsum.photos/id/${dummaryBook.img}/600/600`,
      );
    });
  });

  describe("책 이미지가 주어지면 ", () => {
    it("스타일이 올바르게 적용되어야 합니다.", () => {
      const { getByRole } = render(
        <BookStoreThemeProvider>
          <BooksItem book={dummaryBook} />
        </BookStoreThemeProvider>,
      );

      expect(getByRole("img")).toHaveAttribute(
        "src",
        "https://picsum.photos/id/5/600/600",
      );
    });
  });

  describe("책 컴포넌트 이미지 스타일이 주어지면", () => {
    it("올바르게 적용되어야 합니다.", () => {
      render(
        <BookStoreThemeProvider>
          <BooksItem book={dummaryBook} />
        </BookStoreThemeProvider>,
      );

      const container = screen.getByRole("img").closest("div");

      expect(container).toHaveStyle("border-radius: 4px");
      expect(container).toHaveStyle("overflow: hidden");
    });
  });
});
