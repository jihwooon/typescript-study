export const productTypeDefs = `#graphql
  type Product {
    id: ID!
    title: String!
    description: String!
    imageUrl: String!
    price: Int!
    createdAt: String!
    category: String!
  }

  type Query {
    products(cursor: ID): [Product!]!
    product(id: ID!): Product
  }
`; 