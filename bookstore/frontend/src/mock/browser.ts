import { setupWork } from "msw/browser";

const handlers = [];

export const worker = setupWork(...handlers);
