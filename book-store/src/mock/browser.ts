import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books, likeBook, unlikeBook} from './books';
import {cart, deleteCart, fetchCart} from "./cart";

const handlers = [bestBooks, bookId, books, likeBook, unlikeBook, cart, fetchCart, deleteCart];

export const worker = setupWorker(...handlers);
