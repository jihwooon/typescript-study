import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books, likeBook, unlikeBook} from './books';
import {cart, deleteCart, fetchCart} from "./cart";
import {fetchOrder, fetchOrders, order} from "./order";
import {addReview, reviewById} from "./review";

const handlers = [bestBooks, bookId, books, likeBook, unlikeBook, cart, fetchCart, deleteCart, order, fetchOrders, fetchOrder, reviewById, addReview];

export const worker = setupWorker(...handlers);
