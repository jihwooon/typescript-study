import { productResolvers } from './product';
import { cartResolvers } from './cart';

export const resolvers = {
  Query: {
    ...productResolvers.Query,
    ...cartResolvers.Query,
  },
  Mutation: {
    ...cartResolvers.Mutation,
  },
}; 