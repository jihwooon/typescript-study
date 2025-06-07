import type { Product } from "../../graphql/products";

const CartItemData = ({imageUrl, price, title}: Pick<Product, 'imageUrl' | 'price' | 'title'>) => {

  return (
    <>
      <img className="cart-item__image" src={imageUrl} alt="" />
      <p className="cart-item__price">{price}</p>
      <p className="cart-item__title">{title}</p>
    </>
  )
}

export default CartItemData;
