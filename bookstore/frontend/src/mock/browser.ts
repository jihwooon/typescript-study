import { setupWorker } from "msw/browser";
import { reviewById } from "./review";
import { cartList, addCart } from "./cart";

const handlers = [reviewById, cartList, addCart];

export const worker = setupWorker(...handlers);
