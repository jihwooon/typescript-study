import { graphql, HttpResponse } from 'msw'
import { GET_PRODUCT } from '../graphql/products'
import { GET_PRODUCTS } from '../graphql/products'
import { ADD_CART, GET_CART, type Cart } from '../graphql/cart'

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
        const newData = { ...cartData}
        const { id } = variables
        if (newData[id]) {
            newData[id] = {
                ...newData[id],
                amount: (newData[id].amount || 0) + 1
            }
        } else {
            const founded = mockProducts.find((product) => product.id === id)
            console.log(founded)
            if (founded) {
                newData[id] = {
                    ...founded,
                    amount: 1
                } 
            } 
        }
        cartData = newData;

        return HttpResponse.json({
            data: newData
        })
    })
  ]
