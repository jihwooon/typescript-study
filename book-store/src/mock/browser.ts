import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books, likeBook, unlikeBook} from './books';
import {addCart, deleteCart, fetchCart} from "./addCart";

const handlers = [bestBooks, bookId, books, likeBook, unlikeBook, addCart, fetchCart, deleteCart];

export const worker = setupWorker(...handlers);
