import type { Cart } from "../../graphql/cart"
import CartItem from "./CartItem"

const CartList = ({items } : {items?: Cart[]}) => {
    if (!Array.isArray(items)) {
        return null;
    }

    return (
      <>
      <label><input type="checkbox"/>전체선택</label>
       <ul>
        {items.map((item) => <CartItem key={item.id} {...item}/>)}
       </ul>
      </>
    )
}

export default CartList
