import { graphql, HttpResponse } from 'msw'
import { GET_PRODUCT } from '../graphql/products'
import { GET_PRODUCTS } from '../graphql/products'
import { ADD_CART, DELETE_CART, GET_CART, UPDATE_CART, type Cart } from '../graphql/cart'
import { EXECUTE_PAY } from '../graphql/payment'

const mockProducts = (() => Array.from({ length: 20 }, (_, index) => ({
    id: index + 1 + '',
    createdAt: new Date().toISOString(),
    imageUrl: `https://picsum.photos/id/${index+1}/640/480`,
    price: 50000,
    title: `Product ${index+1}`,
    description: `Description ${index+1}`,
    category: new Date(1234567890123+(index*1000*60)).toISOString(),
})))()

let cartData: { [key: string]: Cart } = {}

export const handlers = [
    graphql.query(GET_PRODUCTS, () => {
        return HttpResponse.json({
            data: {
                products: mockProducts
            }
        })
    }),
    graphql.query(GET_PRODUCT, ({variables}) => {
        const { id } = variables

        return HttpResponse.json({
            data: mockProducts.find((product) => product.id === id)
        })
    }),
    graphql.query(GET_CART, () => {
      return HttpResponse.json({
        data: cartData
      })
    }),
    graphql.mutation(ADD_CART, ({variables}) => {
        const newCartData = { ...cartData}
        const { id } = variables

        const targetProduct = mockProducts.find((product) => product.id === id)
        if (!targetProduct) {
            throw new Error('상품이 없습니다.')
        }

        const newItem = {
          ...targetProduct,
          amount: (newCartData[id]?.amount || 0) + 1
        }
        newCartData[id] = newItem;
        cartData = newCartData;

        return HttpResponse.json({
            data: newItem
        })
    }),
    graphql.mutation(UPDATE_CART, ({variables}) => {
        const newData = { ...cartData}
        const { id, amount } = variables
        if (!newData[id]) {
            throw new Error('존재하지 않는 데이터입니다.')
        }

        const newItem = {
          ...newData[id],
          amount
        }

        newData[id] = newItem;
        cartData = newData;
        return HttpResponse.json({
            data: newItem
        })
    }),
    graphql.mutation(DELETE_CART, ({variables: { id }})=> {
      const newData = {...cartData };
      delete newData[id]
      cartData = newData;
      return HttpResponse.json({
        data: id
      })
    }),
    graphql.mutation(EXECUTE_PAY, ({ variables: { ids } }) => {
      ids.forEach((id: string) => {
        delete cartData[id]
      })

      return HttpResponse.json({
        data: ids
      })
    })
  ]
