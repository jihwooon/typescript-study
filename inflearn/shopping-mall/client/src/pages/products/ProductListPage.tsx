import { useInfiniteQuery } from "@tanstack/react-query"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import { GET_PRODUCTS, type Products } from "../../graphql/products"
import ProductList from "../../compoents/products/ProductList"

const ProductListPage: React.FC = () => {
  const { data, isLoading, error } = useInfiniteQuery<Products>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: ({ pageParam = '' }) => graphqlFetcher(GET_PRODUCTS, { cursor: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, allPages)
      return lastPage.products.at(-1)?.id
    }
  })

  console.log(data)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>상품 목록</h3> 
      <ProductList list={data?.pages || []}/>
    </div>
  )
}

export default ProductListPage
