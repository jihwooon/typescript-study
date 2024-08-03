import { setupWorker } from "msw/browser";
import { addReview, reviewById, reviewForMain } from "./review";
import { cartList, addCart } from "./cart";

const handlers = [reviewById, cartList, addCart, addReview, reviewForMain];

export const worker = setupWorker(...handlers);
