import { Link } from 'react-router-dom'
import { Product } from "../../types"

const ProductItem = ({
  category,
  description,
  image,
  price,
  rating,
  title,
  id,
}: Product) => (
  <li className="products-item">
    <Link to={`/products/${id}`}>
      <p className="products-item__category">{category}</p>
      <p className="products-item__title">{title}</p>
      <p className="products-item__description">{description}</p>
      <img className="products-item__image" src={image} />
      <span className="products-item__price">${price}</span>
      <span className="products-item__rating">{rating.rate}</span>
    </Link>
  </li>
)

export default ProductItem
