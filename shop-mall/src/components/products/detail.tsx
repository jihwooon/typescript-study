import { Product } from '../../graphql/products'

export const ProductDetail = ({
  item: {
    imageUrl,
    price,
    title,
    description,
    createAt,
  }
}: {item: Product}) => (
  <div className="products-detail">
      <span className="products-detail__title">{title}</span>
      <p className="products-detail__description">{description}</p>
      <img className="products-detail__image" src={imageUrl} />
      <span className="products-detail__price">${price}</span>
      <span className="products-detail__rating">{createAt}</span>
  </div>
)

export default ProductDetail;
