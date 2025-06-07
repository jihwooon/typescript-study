export const cartTypeDefs = `#graphql
  type Cart {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
    price: Int!
    amount: Int!
  }

  type Query {
    cart: [Cart!]!
  }

  type Mutation {
    addCart(id: ID!): Cart!
    updateCart(id: ID!, amount: Int!): Cart!
    deleteCart(id: ID!): ID!
    executePay(ids: [ID!]!): [ID!]!
  }
`;