export const typeDefs = `#graphql
  type Product {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
    price: Int!
    createdAt: String!
    category: String!
  }

  type Cart {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
    price: Int!
    amount: Int!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    cart: [Cart!]!
  }

  type Mutation {
    addCart(id: ID!): Cart!
    updateCart(id: ID!, amount: Int!): Cart!
    deleteCart(id: ID!): ID!
    executePay(ids: [ID!]!): [ID!]!
  }
`; 
