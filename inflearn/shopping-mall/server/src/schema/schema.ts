import { productTypeDefs } from './product';
import { cartTypeDefs } from './cart';

export const typeDefs = `#graphql
  ${productTypeDefs}
  ${cartTypeDefs}
`; 
