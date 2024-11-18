import {setupWorker} from 'msw/browser';
import {bestBooks} from './books';

const handlers = [bestBooks];

export const worker = setupWorker(...handlers);
