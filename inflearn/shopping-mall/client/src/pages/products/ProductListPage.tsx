import { useQuery } from "@tanstack/react-query"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import ProductItem from "../../compoents/products/ProductItem"
import { GET_PRODUCTS, type products } from "../../graphql/products"

const ProductListPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<products>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () => graphqlFetcher(GET_PRODUCTS),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>상품 목록</h3>
      <ul className="products">
        {data?.products.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductListPage
