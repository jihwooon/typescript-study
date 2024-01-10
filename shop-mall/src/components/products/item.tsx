import { Link } from 'react-router-dom'
import { Product } from '../../graphql/products'
import { CartItemSelector } from '../../recoils/cart'
import { useRecoilState } from 'recoil'

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
}: Product) => {
  const [ cartAmount, setCartAmount ] = useRecoilState(CartItemSelector(id))
  const addToCart = () => setCartAmount(prev => (prev || 0) + 1);

  return (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__title">{title}</p>
      <img className="products-item__image" src={imageUrl} />
      <span className="products-item__price">${price}</span>
    </Link>
    <button className="products-item__add-cart" onClick={addToCart}>담기</button>
    <span>{cartAmount || 0}</span>
  </li>
)}

export default ProductItem
