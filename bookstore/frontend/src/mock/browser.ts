import { setupWorker } from "msw/browser";
import { addReview, reviewById, reviewForMain } from "./review";
import { cartList, addCart } from "./cart";
import { bestBooks } from "./books"

const handlers = [reviewById, cartList, addCart, addReview, reviewForMain, bestBooks];

export const worker = setupWorker(...handlers);
