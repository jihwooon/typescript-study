import { OrderSheet } from "../models/order.model";

const orders: OrderSheet[] = [];

export const order = async (orderData: OrderSheet) => {
  orders.push(orderData);

  return orderData;
};
