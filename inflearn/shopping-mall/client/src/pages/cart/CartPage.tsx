import { useQuery } from "@tanstack/react-query";
import { QueryKeys, graphqlFetcher } from "../../queryClient"
import { GET_CART, type Cart } from "../../graphql/cart";
import CartList from "../../compoents/cart/CartList";

type CartResponse = {
  cart: Cart[]
}

const CartPage = () => {
  const { data } = useQuery<CartResponse>({
    queryKey: [QueryKeys.CART],
    queryFn: () => graphqlFetcher(GET_CART),
    staleTime: 0,
    gcTime: 1000
  })


  const cartItems = (data?.cart || []) as Cart[]
  if (!cartItems.length) {
    return <div>장바구니가 비었어요</div>
  }

  return (
    <CartList items={cartItems}/>
  )
};

export default CartPage;
