import type { product } from "../../graphql/products";
import ProductItem from "./ProductItem";

const ProductList = ({ list } : { list: product[]}) => {
    return (
        <ul className="products">
        {list?.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    );
}

export default ProductList;
