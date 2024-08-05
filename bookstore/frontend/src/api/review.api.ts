import { BookReviewItem, BookReviewItemWrite } from '@/models/book.model';
import { requestHandler } from './http';

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem>('get', `/review/${bookId}`);
};

interface AddBookReviewResponse {
  message: string;
}

export const addBookReview = async (bookId: string, data: BookReviewItemWrite) => {
  return await requestHandler<AddBookReviewResponse>('post', `/review/${bookId}`);
};

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>('get', '/reviews');
};
