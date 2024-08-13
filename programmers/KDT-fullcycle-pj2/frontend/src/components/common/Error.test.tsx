import { render, screen } from '@testing-library/react';
import Error from './Error';
import * as router from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(),
}));

describe('Error 컴포넌트', () => {
  describe('statusText 상태 메세지가 Not Found가 주어지면', () => {
    it('에러 메시지를 렌더링해야 합니다.', () => {
      vi.spyOn(router, 'useRouteError').mockReturnValue({
        statusText: 'Not Found',
      });

      render(<Error />);

      expect(screen.getByText('오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('다음과 같은 오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('Not Found')).toBeInTheDocument();
    });
  });

  describe('statusText 상태 메세지가 Server Error가 주어지면', () => {
    it('에러 메시지를 렌더링해야 합니다.', () => {
      vi.spyOn(router, 'useRouteError').mockReturnValue({
        statusText: 'Server Error',
      });

      render(<Error />);

      expect(screen.getByText('오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('다음과 같은 오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('Server Error')).toBeInTheDocument();
    });
  });

  describe('statusText와 message 메세지 둘 다 주어지면', () => {
    it('에러 메시지를 렌더링해야 합니다.', () => {
      vi.spyOn(router, 'useRouteError').mockReturnValue({
        statusText: 'Not Found',
        message: 'Server Error',
      });

      render(<Error />);

      expect(screen.getByText('오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('다음과 같은 오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('Not Found')).toBeInTheDocument();
      expect(screen.queryByText('Server Error')).not.toBeInTheDocument();
    });
  });

  describe('statusText 또는 message가 둘 다 존재하지 않으면', () => {
    it('기본 오류 메시지만 렌더링해야 합니다.', () => {
      vi.spyOn(router, 'useRouteError').mockReturnValue({});
      render(<Error />);

      expect(screen.getByText('오류가 발생했습니다.')).toBeInTheDocument();
      expect(screen.getByText('다음과 같은 오류가 발생했습니다.')).toBeInTheDocument();
    });
  });
});
