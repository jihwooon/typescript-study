import { setupWorker } from 'msw/browser';
import { addReview, reviewById, reviewForMain } from './review';
import { cartList, addCart } from './cart';
import { bestBooks } from './books';
import { banners } from '@/mock/banner.ts';

const handlers = [reviewById, cartList, addCart, addReview, reviewForMain, bestBooks, banners];

export const worker = setupWorker(...handlers);
