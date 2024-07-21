import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { BookStoreThemeProvider } from "../../context/themeContext";
import React from "react";

describe("InputText 컴포넌트", () => {
  describe("placeholder 텍스트가 주어지면", () => {
    test("렌더링이 되어야 합니다.", () => {
      render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" />
        </BookStoreThemeProvider>,
      );

      expect(
        screen.getByPlaceholderText("여기로 입력하세요"),
      ).toBeInTheDocument();
    });
  });

  describe("ref가 주어지면", () => {
    test("HTMLInputElement에 접근할 수 있어야 합니다.", () => {
      const ref = React.createRef<HTMLInputElement>();

      render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" ref={ref} />
        </BookStoreThemeProvider>,
      );

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });

  describe("기본 텍스트 색상이 주어지면", () => {
    test("검정색으로 렌더링되어야 합니다.", () => {
      const black = "rgb(0, 0, 0)";

      const { container } = render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" />
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ color: black });
    });
  });

  describe("기본 padding이 주어지면", () => {
    test("'0.25rem 0.75rem'으로 설정되어야 합니다.", () => {
      const { container } = render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" />
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ padding: "0.25rem 0.75rem" });
    });
  });

  describe("기본 border가 주어지면", () => {
    test("'1px solid grey'로 설정되어야 합니다.", () => {
      const { container } = render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" />
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ border: "1px solid grey" });
    });
  });

  describe("기본 font-size가 주어지면", () => {
    test("'1rem'으로 설정되어야 합니다.", () => {
      const { container } = render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" />
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({
        "font-size": "1rem",
      });
    });
  });

  describe("기본 line-height가 주어지면", () => {
    test("'1.5'로 설정되어야 합니다", () => {
      const { container } = render(
        <BookStoreThemeProvider>
          <InputText placeholder="여기로 입력하세요" />
        </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({
        "line-height": "1.5",
      });
    });
  });
});
