import type { Product } from "../../graphql/products";
import ProductItem from "./ProductItem";

const ProductList = ({ list } : { 
  list: { 
    products: Product[]
  } []
}) => {
    return (
        <ul className="products">
        {list
          .map((page) => page.products
          .map((product) => (
          <ProductItem key={product.id} {...product} />
        )))}
      </ul>
    );
}

export default ProductList;
