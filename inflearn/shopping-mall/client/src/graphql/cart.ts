import gql from "graphql-tag";

export type Cart = {
	id: string
	imageUrl: string
	price: number
	title: string
	amount: number
}

export const ADD_CART = gql`
	mutation ADD_CART($id: ID!) {
		id
		imageUrl
		price
		title
		amount
	}
`

export const GET_CART = gql`
	query GET_CART {
		id
		imageUrl
		price
		title
		createdAt
	}
`
export const UPDATE_CART = gql`
  mutation UPDATE_CART($id: ID!, $amount: Int!) {
    updateCart(cartId: $id, amount: $amount) {
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
