import {setupWorker} from 'msw/browser';
import {bestBooks, bookId, books} from './books';

const handlers = [bestBooks, bookId, books];

export const worker = setupWorker(...handlers);
