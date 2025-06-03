import { Link } from "react-router"
import type { product } from "../../graphql/products"
import { cartItemSelector } from "../../recoils/cart";
import { useRecoilState } from "recoil";

const ProductItem: React.FC<product> = ({ id, imageUrl, price, title}) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount((prev) => (prev || 0) + 1);

  return (
   <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} alt={title} />
      <span className="product-item__price">${price}</span>
    </Link>
    <button type="button" className="product-item__add-cart" onClick={addToCart}>담기</button>
    <span>{cartAmount || 0}</span>
   </li>
  )
}

export default ProductItem
