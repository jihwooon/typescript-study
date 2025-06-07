import { useMutation } from "@tanstack/react-query";
import { DELETE_CART, UPDATE_CART, type Cart } from "../../graphql/cart";
import { getQueryClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import { forwardRef, type ForwardedRef } from "react";
import CartItemData from "./CartItemData";

const CartItem = ({id, amount, product: { imageUrl, price, title }}: Cart, ref: ForwardedRef<HTMLInputElement>) => {
  const queryClient = getQueryClient()
  const { mutate: updateToCart } = useMutation<{ updateCart: Cart }, Error, { id: string, amount: number }>({
    mutationFn: ({ id, amount}) => graphqlFetcher(UPDATE_CART, { id, amount }), 
    onMutate: async ({ id, amount }) => {
      await queryClient.cancelQueries({ queryKey: [QueryKeys.CART]})
      const { cart: prevCart } = queryClient.getQueryData<{ cart: Cart[]}>([QueryKeys.CART]) || { cart: [] }

      if (!prevCart) {
        return null;
      }

      const targetIndex = prevCart.findIndex(cartItem => cartItem.id === id)
      if (targetIndex === undefined || targetIndex < 0) {
        return prevCart
      }

      const newCart = [...prevCart]
      newCart.splice(targetIndex, 1, { ...newCart[targetIndex], amount })
      queryClient.setQueryData([QueryKeys.CART], newCart) 
      return prevCart
    },
    onSuccess: ({ updateCart }) => {
      const { cart: prevCart } = queryClient.getQueryData<{ cart: Cart[] }>(
        [QueryKeys.CART],
      ) || { cart: [] }

      const targetIndex = prevCart?.findIndex(cartItem => cartItem.id === updateCart.id)
      if (!prevCart || targetIndex === undefined || targetIndex < 0) return

      const newCart = [...prevCart]
      newCart.splice(targetIndex, 1, updateCart)
      queryClient.setQueryData([QueryKeys.CART], { cart: newCart })
    }
  });

  const { mutate: deleteCart } = useMutation({
    mutationFn: ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QueryKeys.CART]})
    }
  });

  const handleDeleteItem = () => {
    deleteCart({ id })
  }

  const handleUpdateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value)
    if (amount < 1) return
    updateToCart({ id, amount }) 
  }
 
  return (
    <li className="cart-item">
       <input className="cart-item__checkbox" type="checkbox" name={`select-item`} ref={ref} data-id={id}/>
       <CartItemData imageUrl={imageUrl} price={price} title={title} />
      <input className="cart_item__amount" type="number" min={1} value={amount} onChange={handleUpdateAmount}/>
      <button className="cart-item__button" type="button" onClick={handleDeleteItem}>삭제</button>
    </li>
  )
}

export default forwardRef(CartItem);
