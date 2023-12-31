import { useQuery } from "react-query"
import { fetcher, QueryKeys } from '../../queryClient'
import { Product } from '../../types'
import ProductItem from '../../components/products/item'
import '../../../scss/index.scss'

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () => fetcher({
    method: 'GET',
    path: '/products',
  }))

  return (
    <div>
      <ul className="products">
        {data?.map(product => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
