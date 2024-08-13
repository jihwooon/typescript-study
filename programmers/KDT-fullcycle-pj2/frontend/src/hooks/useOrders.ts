import { useEffect, useState } from 'react';
import { OrderListItem } from '../models/order.model';
import { fetchOrder, fetchOrders } from '../api/order.api';

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setDelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((orders) => {
      setOrders(orders);
    });
  });

  const selectOrderItem = (orderId: number) => {
    if (orders.filter((item) => item.id === orderId)[0].detail) {
      setDelectedItemId(orderId);
      return;
    }

    fetchOrder(orderId).then((orderDetail) => {
      setDelectedItemId(orderId);

      setOrders(
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: orderDetail,
            };
          }
          return item;
        }),
      );
    });
  };

  return { orders, selectedItemId, selectOrderItem };
};
