import { useQuery } from "@tanstack/react-query"
import { QueryKeys, graphqlFetcher } from "../../queryClient"
import { useParams } from "react-router"
import ProductDetail from "../../compoents/products/ProductDetail"
import { GET_PRODUCT, type Product } from "../../graphql/products"

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams()

  const { data, isLoading, error } = useQuery<{ product: Product }>({
    queryKey: [QueryKeys.PRODUCTS, productId],
    queryFn: () => graphqlFetcher(GET_PRODUCT, { id: productId }),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>상품을 찾을 수 없습니다.</div>

  return (
    <div>
      <h2>상품 상세</h2>
      <ProductDetail item={data.product}/> 
    </div>
  )
}

export default ProductDetailPage
