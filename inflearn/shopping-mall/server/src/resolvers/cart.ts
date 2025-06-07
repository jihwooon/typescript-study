import { setJSON } from "..";
import { Resolver } from "./types";

export const cartResolvers: Resolver = {
  Query: {
    cart: (parent, args, { db }) => {
      return db.cart.map((item: any) => ({
        ...item,
        product: db.products.find((product: any) => product.id === item.id)
      }))
    },
  },
  Mutation: {
    addCart: (parent, { id }, { db }) => {
      if (!id) {
        throw new Error('상품 id가 없습니다.')
      }

      const targetProduct = db.products.find((product: any) => product.id === id);
      if (!targetProduct) {
        throw new Error('상품이 없습니다.')
      }

      const existCartItemIndex = db.cart.findIndex((item: any) => item.id === id)

      if (existCartItemIndex > -1) {
        const newCartItem = {
          id,
          amount: db.cart[existCartItemIndex].amount + 1
        }

        db.cart.splice(existCartItemIndex, 1, newCartItem)
        setJSON(db.cart)
        return newCartItem;
      }

      const newItem = {
        id,
        amount: 1
      };

      db.cart.push(newItem)
      setJSON(db.cart)
      return newItem;
    },
    updateCart: (parent, { id, amount }, { db }) => {
      const existCartIndex = db.cart.findIndex((item: any) => item.id === id)

      if (existCartIndex < 0) {
        throw new Error('존재하지 않는 데이터입니다.');
      }

      const newCartItem = {
        id,
        amount
      }

      db.cart.splice(existCartIndex, 1, newCartItem)
      setJSON(db.cart)  
      return newCartItem
    },
    deleteCart: (parent, { id, amount }, { db }) => {
      const existCartIndex = db.cart.findIndex((item: any) => item.id === id)

      if (existCartIndex < 0) {
        throw new Error('존재하지 않는 데이터입니다.');
      }
      
      db.cart.splice(existCartIndex, 1)
      setJSON(db.cart)
      return id
    },
    executePay: (parent, { ids }, { db }) => {
      const newCartData = db.cart.filter((cartItem: any) => !ids.includes(cartItem.id))
      db.cart = newCartData
      setJSON(db.cart)
      return ids;
    },
  },
};
