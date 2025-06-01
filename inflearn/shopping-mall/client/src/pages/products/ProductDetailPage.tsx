import { useQuery } from "@tanstack/react-query"
import type { Product } from "../../types"
import { QueryKeys } from "../../queryClient"
import { fetcher } from "../../queryClient"
import { useParams } from "react-router"
import ProductDetail from "../../compoents/products/ProductDetail"

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams()
  const { data, isLoading, error } = useQuery<Product>({
    queryKey: [QueryKeys.PRODUCTS, productId],
    queryFn: () => fetcher({ method: 'GET', path: `/products/${productId}` }),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>상품을 찾을 수 없습니다.</div>

  return (
    <div>
      <h2>상품 상세</h2>
      <ProductDetail item={data}/> 
    </div>
  )
}

export default ProductDetailPage
