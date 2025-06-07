import { Resolver } from "./types";

export const productResolvers: Resolver = {
  Query: {
    products: (parent, args, { db }) => {
      return db.products;
    },
    product: (parent, { id }, { db }) => {
      const found = db.products.find((product: any) => product.id === id);
      if (!found) {
        throw new Error(`Product가 존재하지 않습니다.`);
      }

      return found;
    },
  },
}; 
