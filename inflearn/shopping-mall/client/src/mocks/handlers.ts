import { graphql, HttpResponse } from 'msw'
import { v4 as uuid } from 'uuid'
import { GET_PRODUCT } from '../graphql/products'
import { GET_PRODUCTS } from '../graphql/products'

const mockProducts = Array.from({ length: 20 }, (_, index) => ({
    id: uuid(),
    createdAt: new Date().toISOString(),
    imageUrl: `https://picsum.photos/id/${index+1}/640/480`,
    price: 50000,
    title: `Product ${index+1}`,
    description: `Description ${index+1}`,
    category: new Date(1234567890123+(index*1000*60)).toISOString(),
}))

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
    })
  ]
