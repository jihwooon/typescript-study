import { Product } from "../../types";

export const ProductDetail = ({
  item: {
    category,
    description,
    image,
    price,
    title,
    rating: { rate },
  }
}: {item: Product}) => (
  <div className="products-detail">
      <span className="products-detail__category">{category}</span>
      <span className="products-detail__title">{title}</span>
      <p className="products-detail__description">{description}</p>
      <img className="products-detail__image" src={image} />
      <span className="products-detail__price">${price}</span>
      <span className="products-detail__rating">{rate}</span>
  </div>
)

export default ProductDetail;
