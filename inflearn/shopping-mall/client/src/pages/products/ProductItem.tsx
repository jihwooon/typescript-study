import { Link } from "react-router"
import type { Product } from "../../types"

const ProductItem: React.FC<Product> = ({ id, title, price, category, image, rating }) => {
  return (
   <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={image} alt={title} />
      <span className="product-item__price">${price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </Link>
   </li>
  )
}

export default ProductItem
