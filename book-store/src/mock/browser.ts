import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books, likeBook, unlikeBook} from './books';
import {cart, deleteCart, fetchCart} from "./cart";
import {fetchOrder, fetchOrders, order} from "./order";

const handlers = [bestBooks, bookId, books, likeBook, unlikeBook, cart, fetchCart, deleteCart, order, fetchOrders, fetchOrder];

export const worker = setupWorker(...handlers);
