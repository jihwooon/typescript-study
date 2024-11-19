import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books, likeBook, unlikeBook} from './books';
import {addCart} from "./addCart";

const handlers = [bestBooks, bookId, books, likeBook, unlikeBook, addCart];

export const worker = setupWorker(...handlers);
