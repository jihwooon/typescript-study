import { Link } from 'react-router-dom'
import { Product } from '../../graphql/products'

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createAt,
}: Product) => (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__title">{title}</p>
      <p className="products-item__description">{description}</p>
      <img className="products-item__image" src={imageUrl} />
      <span className="products-item__price">${price}</span>
      <span className="products-item__rating">{createAt}</span>
    </Link>
  </li>
)

export default ProductItem
