import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import BooksFilter from './BooksFilter';

describe('BooksFilter 컴포넌트', () => {
  beforeEach(() => {
    render(
      <BookStoreThemeProvider>
        <BooksFilter />
      </BookStoreThemeProvider>,
    );
  });

  describe('카테고리 버튼들이 주어지면', () => {
    it('버튼 갯수가 올바르게 반환되어야 합니다.', () => {
      const buttonMessages = screen.getAllByRole('button', {
        name: /전체|동화|소설|사회|신간/,
      });

      expect(buttonMessages).toHaveLength(5);
    });
  });

  describe('카테고리 버튼들에 올바른 텍스트 내용이 주어지면', () => {
    it('렌더링되어야 합니다', () => {
      const buttons = screen.getAllByRole('button', {
        name: /전체|동화|소설|사회|신간/,
      });

      expect(buttons[0]).toHaveTextContent('전체');
      expect(buttons[1]).toHaveTextContent('동화');
      expect(buttons[2]).toHaveTextContent('소설');
      expect(buttons[3]).toHaveTextContent('사회');
      expect(buttons[4]).toHaveTextContent('신간');
    });
  });
});
