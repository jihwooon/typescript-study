import { useInfiniteQuery } from "@tanstack/react-query"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import { GET_PRODUCTS, type Products } from "../../graphql/products"
import ProductList from "../../compoents/products/ProductList"
import { useEffect, useRef } from "react"
import useIntersection from "../../hooks/useIntersection"

const ProductListPage: React.FC = () => {
  const fetchMoreRef = useRef<HTMLDivElement>(null)
  const intersecting = useIntersection(fetchMoreRef)

  const { data, isSuccess, isLoading, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery<Products>({
    queryKey: [QueryKeys.PRODUCTS, false],
    queryFn: ({ pageParam = '' }) => graphqlFetcher(GET_PRODUCTS, { cursor: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.products.at(-1)?.id
    }
  })

  useEffect(() => { 
    if(!intersecting || !isSuccess || !hasNextPage || !isFetchingNextPage) {
      fetchNextPage()
    }
  },[intersecting])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>상품 목록</h3> 
      <ProductList list={data?.pages || []}/>
      <div ref={fetchMoreRef}/>
    </div>
  )
}

export default ProductListPage
