export const productTypeDefs = `#graphql
  type Product {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
    price: Int!
    createdAt: Float
    category: String!
  }

  type Query {
    products(cursor: ID): [Product!]!
    product(id: ID!): Product
  }
  
  extend type Mutation {
    addProduct (
      imageUrl: String!,
      price: Int!,
      title: String!,
      description: String!
    ): Product!
    updateProduct(
      id: ID!
      imageUrl: String,
      price: Int,
      title: String,
      DESCRIPTION: String
    ): Product!
    deleteProduct(id: ID!): ID!
  }
`;
