import { Link } from "react-router"
import type { PRODUCT } from "../../graphql/products"

const ProductItem: React.FC<PRODUCT> = ({ id, imageUrl, price, title}) => {
  return (
   <li className="product-item">
    <Link to={`/products/${id}`}>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} alt={title} />
      <span className="product-item__price">${price}</span>
    </Link>
   </li>
  )
}

export default ProductItem
