import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books, likeBook, unlikeBook} from './books';

const handlers = [bestBooks, bookId, books, likeBook, unlikeBook];

export const worker = setupWorker(...handlers);
