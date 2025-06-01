import type { Product } from "../../types"

const ProductItem = ({ title, price, category, image, rating }: Product) => {
  return (
   <li className="product-item">
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={image} alt={title} />
      <span className="product-item__price">${price} $</span>
      <span className="product-item__rating">{rating.rate}</span>
   </li>
  )
}

export default ProductItem
