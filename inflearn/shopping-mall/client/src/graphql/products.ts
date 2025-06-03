import { gql } from 'graphql-tag'

export type product = {
  id: string
  imageUrl: string
  price: number
  title: string
  description: string
  createdAt: string
}

export type products = {
  products: product[]
}

export const GET_PRODUCTS = gql`
    query GET_PRODUCTS {
      id
      imageUrl
      price
      title
      description
      createdAt
    }
`

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: ID!) {
      id
      imageUrl
      price
      title
      description
      createdAt
  }
`
