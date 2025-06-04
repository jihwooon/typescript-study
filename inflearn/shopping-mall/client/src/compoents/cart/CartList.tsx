import type { Cart } from "../../graphql/cart"
import CartItem from "./CartItem"

const CartList = ({items } : {items?: Cart[]}) => {
    if (!Array.isArray(items)) {
        return null;
    }

    return (
     <ul>
        {items.map((item) => <CartItem key={item.id} {...item}/>)}
     </ul>
    )
}

export default CartList
