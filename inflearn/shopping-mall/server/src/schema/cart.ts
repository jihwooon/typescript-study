export const cartTypeDefs = `#graphql
  type Cart {
    id: ID!
    amount: Int!
    product: Product
  }

  extend type Query {
    cart: [Cart!]!
  }

  type Mutation {
    addCart(id: ID!): Cart!
    updateCart(id: ID!, amount: Int!): Cart!
    deleteCart(id: ID!): ID!
    executePay(ids: [ID!]!): [ID!]!
  }
`;
