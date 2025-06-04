import { useMutation } from "@tanstack/react-query";
import { UPDATE_CART, type Cart } from "../../graphql/cart";
import { getQueryClient, graphqlFetcher, QueryKeys } from "../../queryClient";

const CartItem = ({id, imageUrl, price, title, amount }: Cart) =>{
  const queryClient = getQueryClient()
  const { mutate: updateToCart } = useMutation({
    mutationFn: ({ id, amount}: {id: string, amount: number}) => graphqlFetcher(UPDATE_CART, { id, amount }), 
    onMutate: async ({ id, amount }) => {
      await queryClient.cancelQueries({ queryKey: [QueryKeys.CART]})
      const prevCart = queryClient.getQueryData<{ [key: string]: Cart[] }>([QueryKeys.CART])
      if (!prevCart?.[id]) {
        return prevCart;
      }

      const newCart = {
        ...(prevCart || {}),
        [id]: { ...prevCart[id], amount},
      }

      queryClient.setQueryData([QueryKeys.CART], newCart) 
    },
    onSuccess: newValue => {
      const prevCart = queryClient.getQueryData<{ [key: string]: Cart[] }>([QueryKeys.CART]) 

      const newCart = {
        ...(prevCart || {}),
        [id]: newValue
      }

      queryClient.setQueryData([QueryKeys.CART], newCart) 
    }
    }
  );

  const handleUpdateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value)
    if (amount < 1) return
    updateToCart({ id, amount }) 
  }

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={imageUrl}/>
      <p className="cart-item__price">{price}</p>
      <p className="cart_item__title">{title}</p>
      <input className="cart_item__amount" type="number" min={1} value={amount} onChange={handleUpdateAmount}/>
    </li>
  )
}

export default CartItem;
