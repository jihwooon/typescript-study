import { Resolver } from "./types";

export const productResolvers: Resolver = {
  Query: {
    products: (parent, args, { db }) => {
      return db.products;
    },
    product: (parent, { id }, { db }) => {
      const found = db.products.find((product: any) => product.id === id);
      if (!found) {
        return null
      }

      return found;
    },
  },
}; 
