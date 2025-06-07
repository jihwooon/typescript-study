import { useInfiniteQuery } from "@tanstack/react-query"
import { graphqlFetcher, QueryKeys } from "../../queryClient"
import { GET_PRODUCTS, type Products } from "../../graphql/products"
import ProductList from "../../compoents/products/ProductList"
import { useCallback, useEffect, useRef, useState } from "react"

const ProductListPage: React.FC = () => {
  const observerRef = useRef<IntersectionObserver>()
  const fetchMoreRef = useRef<HTMLDivElement>(null)
  const [intersercting, setIntersercting] = useState(false)

  const getObserver = useCallback(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries) => {
        setIntersercting(entries[0]?.isIntersecting)
      })
    }
    return observerRef.current
  }, [observerRef.current])

  console.log(intersercting)

  useEffect(() => {
    if(fetchMoreRef.current) {
      getObserver().observe(fetchMoreRef.current)
    }
  }, [fetchMoreRef.current])

  const { data, isLoading, error } = useInfiniteQuery<Products>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: ({ pageParam = '' }) => graphqlFetcher(GET_PRODUCTS, { cursor: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.products.at(-1)?.id
    }
  })

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
