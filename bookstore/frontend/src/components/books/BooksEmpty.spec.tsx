import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BookStoreThemeProvider } from '../../context/themeContext';
import BooksEmpty from './BooksEmpty';
import { BrowserRouter } from 'react-router-dom';

describe('BooksEmpty 컴포넌트', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BookStoreThemeProvider>
          <BooksEmpty />
        </BookStoreThemeProvider>
      </BrowserRouter>,
    );
  });

  describe('검색 결과가 없을 때', () => {
    it('안내 메시지가 렌더링되어야 합니다.', () => {
      const errorMessage = screen.getByText('검색 결과가 없습니다.');

      expect(errorMessage).toBeInTheDocument();
    });

    it('전체 검색 링크가 렌더링되어야 합니다.', () => {
      const errorMessage = screen.getByText('전체 검색 결과로 이동');

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
