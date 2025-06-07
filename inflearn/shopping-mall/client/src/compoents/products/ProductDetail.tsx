import type { Product } from "../../graphql/products"

const ProductDetail = ({ item: { title, imageUrl, description, price } }: { item: Product }) => {

  return (
    <div className="product-detail">
      <p className="product-detail__title">{title}</p>
      <p className="product-detail__description">{description}</p>
      <p className="product-detail__price">{price}</p>
      <img className="product-detail__image" src={imageUrl} alt={title} />
    </div>
  )
   
}

export default ProductDetail
