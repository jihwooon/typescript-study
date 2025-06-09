import { useEffect, useRef, useState } from "react";
import ProductList from "../products/ProductList";
import AdminAddForm from "./AdminAddForm";
import useIntersection from "../../hooks/useIntersection";
import { graphqlFetcher, QueryKeys } from "../../queryClient";
import { useInfiniteQuery } from "@tanstack/react-query";
import { GET_PRODUCTS, type Products } from "../../graphql/products";
import AdminList from "./AdminList";

const AdminIndex = () => {
    const [editingIndex, setEditingIndex] =useState<number| null>(null)
    const fetchMoreRef = useRef<HTMLDivElement>(null)
    const intersecting = useIntersection(fetchMoreRef)
  
    const { data, isSuccess, isLoading, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery<Products>({
      queryKey: [QueryKeys.PRODUCTS, 'admin'],
      queryFn: ({ pageParam = '', }) => graphqlFetcher(GET_PRODUCTS, { cursor: pageParam, showDeleted: true }),
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

    const startEdit = (index: number) => () => setEditingIndex(index)
    const doneEdit = () => setEditingIndex(null)

    return (
        <>
        <h3>어드민 목록</h3> 
        <AdminAddForm/>
        <AdminList 
          list={data?.pages || []}
          editingIndex={editingIndex}
          startEdit={startEdit}
          doneEdit={doneEdit}
        />
        <div ref={fetchMoreRef}/>
      </>
    );
}

export default AdminIndex;
