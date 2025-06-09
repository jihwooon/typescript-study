import { Link } from "react-router"
import type { Product } from "../../graphql/products"
import { useMutation } from "@tanstack/react-query";
import { graphqlFetcher } from "../../queryClient";
import { ADD_CART } from "../../graphql/cart";

const AdminItem: React.FC<Product> = ({ id, imageUrl, price, title, createdAt }) => {
  const { mutate: addToCart } = useMutation({
    mutationFn: (id: string) => graphqlFetcher(ADD_CART, { id })
  });

  return (
   <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} alt={title} />
      <span className="product-item__price">${price}</span>
    </Link>
    {!createdAt && <span>삭제된 상품</span>}
    <button type="button" className="product-item__add-cart" onClick={() => addToCart(id)}>어드민</button>
   </li>
  )
}

export default AdminItem
