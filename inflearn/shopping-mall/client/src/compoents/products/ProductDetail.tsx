import type { product } from "../../graphql/products"

const ProductDetail: React.FC<{item: product}> = ({ item }) => {
    const { imageUrl, price, title, description, createdAt } = item

    return (
        <div className="product-detail">
        <p className="product-detail__title">{title}</p>
        <p className="product-detail__description">{description}</p>
        <p className="product-detail__price">{price}</p>
        <img className="product-detail__image" src={imageUrl} alt={title} />
        <span className="product-detail__createdAt">{createdAt}</span>
      </div>
    )
}

export default ProductDetail
