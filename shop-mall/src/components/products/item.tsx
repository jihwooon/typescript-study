import { Link } from 'react-router-dom'
import { Product } from '../../graphql/products'

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
}: Product) => (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__title">{title}</p>
      <img className="products-item__image" src={imageUrl} />
      <span className="products-item__price">${price}</span>
    </Link>
    <button className="products-item__add-cart">장바구니 담기</button>
  </li>
)

export default ProductItem
