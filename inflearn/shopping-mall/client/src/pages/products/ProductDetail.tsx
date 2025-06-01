import type { Product } from "../../types"

const ProductDetail: React.FC<{item: Product}> = ({ item }) => {
    const { category, title, description, price, rating, image } = item

    return (
        <div className="product-detail">
        <p className="product-detail__category">{category}</p>
        <p className="product-detail__title">{title}</p>
        <p className="product-detail__description">{description}</p>
        <p className="product-detail__price">{price}</p>
        <p className="product-detail__rating">{rating.rate}</p>
        <img className="product-detail__image" src={image} alt={title} />
      </div>
    )
}

export default ProductDetail
