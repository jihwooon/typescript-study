import { fetchBestBook, fetchBooks } from '@/api/books.api';
import { fetchReviewAll } from '@/api/review.api';
import { Book, BookReviewItem } from '@/models/book.model';
import { useEffect, useState } from 'react';
import { Banner } from '@/models/banner.model.ts';
import { fetchBanners } from '@/api/banners.api.ts';

export const useMain = () => {
  const [reviews, setReviews] = useState<BookReviewItem[]>();
  const [newBooks, setNewBooks] = useState<Book[]>([]);
  const [bestBooks, setBestBooks] = useState<Book[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    fetchReviewAll().then((reviews) => {
      setReviews(reviews);
    });

    fetchBooks({
      category_id: undefined,
      news: true,
      currentPage: 1,
      limit: 4,
    }).then(({ books }) => {
      setNewBooks(books);
    });

    fetchBestBook().then((books) => {
      setBestBooks(books);
    });

    fetchBanners().then((banners) => {
      setBanners(banners);
    });
  }, []);

  return { reviews, newBooks, bestBooks, banners };
};
