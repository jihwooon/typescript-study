import { useQuery } from "@tanstack/react-query"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import { GET_PRODUCTS, type Products } from "../../graphql/products"
import ProductList from "../../compoents/products/ProductList"

const ProductListPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<Products>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () => graphqlFetcher(GET_PRODUCTS),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>상품 목록</h3> 
      <ProductList list={data?.products || []}/>
    </div>
  )
}

export default ProductListPage
