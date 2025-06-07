import { Resolver } from "./types";

export const productResolvers: Resolver = {
  Query: {
    products: (parent, { cursor = '' }, { db }) => {
      const findIndex = db.products.findIndex((product) => product.id === cursor);
      if (findIndex === -1) {
        return [];
      }

      return db.products.slice(findIndex + 1, findIndex + 15);
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
