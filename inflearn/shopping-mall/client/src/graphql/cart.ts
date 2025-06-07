import gql from "graphql-tag";
import type { Product } from "./products";

export type Cart = {
	id: string
	amount: number
	product: Product
}

export const ADD_CART = gql`
	mutation ADD_CART($id: ID!) {
  	  addCart(id: $id) {
        id
    	amount
    	product {
      	  category
      	  id
      	  description
          imageUrl
          price
      	  title
          createdAt
     	}
  	  }
	}
`

export const GET_CART = gql`
	query GET_CART {
  	  cart {
    	amount
    	id
    	product {
      	  category
      	  createdAt
      	  description
      	  id
      	  imageUrl
      	  price
      	  title
    	}
  	  }
	}
`
export const UPDATE_CART = gql`
  mutation UPDATE_CART($id: ID!, $amount: Int!) {
    updateCart(id: $id, amount: $amount) {
      id
      amount
      product {
        id
        imageUrl
        price
        title
        description
        createdAt
      }
    }
  }
`

export const DELETE_CART = gql`
  mutation DELETE_CART($id: ID!) {
	id
  }
`
