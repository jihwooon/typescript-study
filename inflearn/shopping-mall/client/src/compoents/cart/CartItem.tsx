import { useMutation } from "@tanstack/react-query";
import { UPDATE_CART, type Cart } from "../../graphql/cart";
import { graphqlFetcher } from "../../queryClient";

const CartItem = ({id, imageUrl, price, title, amount }: Cart) =>{
  const { mutate: updateToCart } = useMutation({
    mutationFn: ({ id, amount}: {id: string, amount: number}) => graphqlFetcher(UPDATE_CART, { id, amount })
  });

  const handleUpdateAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(e.target.value)
    if (amount < 1) return
    updateToCart({ id, amount })
  }

  return (
    <li className="cart-item">
      <img src={imageUrl}/>
      <p className="cart-item__price">{price}</p>
      <p className="cart_item__title">{title}</p>
      <input className="cart_item__amount" type="number" min={1} value={amount} onChange={handleUpdateAmount}/>
    </li>
  )
}

export default CartItem;
