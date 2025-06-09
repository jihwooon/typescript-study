import type { Product } from "../../graphql/products";

const ProductList = ({ list, ProductItem } : { 
  list: { 
    products: Product[]
  } [],
  ProductItem: ({ id, imageUrl, price, title}: Product) => JSX.Element
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
