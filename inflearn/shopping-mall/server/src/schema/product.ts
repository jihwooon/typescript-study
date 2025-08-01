export const productTypeDefs = `#graphql
  type Product {
    id: ID!
    imageUrl: String!
    price: Int!
    title: String!
    description: String
    createdAt: Float
  }

  type Query {
    products(cursor: ID, showDeleted: Boolean): [Product!]!
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
      description: String
    ): Product!
    deleteProduct(id: ID!): ID!
  }
`;
