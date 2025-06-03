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
		imagrUrl
		price
		title
		amount
	}
`

export const GET_CART = gql`
	query GET_CART {
		id
		imagrUrl
		price
		title
		createdAt
	}
`
