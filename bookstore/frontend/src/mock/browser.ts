import { setupWorker } from "msw/browser";
import { addReview, reviewById } from "./review";
import { cartList, addCart } from "./cart";

const handlers = [reviewById, cartList, addCart, addReview];

export const worker = setupWorker(...handlers);
