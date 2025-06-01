import { useQuery } from "@tanstack/react-query"
import { fetcher, QueryKeys } from "../../queryClient"
import ProductItem from "./ProductItem"
import type { Product } from "../../types"

const ProductListPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () => fetcher({ method: 'GET', path: '/products' }),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>상품 목록</h3>
      <ul className="products">
        {data?.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
      <h1>상품 목록</h1>
    </div>
  )
}

export default ProductListPage
