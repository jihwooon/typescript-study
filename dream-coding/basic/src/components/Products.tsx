import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        console.log('네트워크에서 데이터를 호출');
      });
    return () => {
      console.log('컴포넌트가 언마운트됨');
    }
  }, [checked]);

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={handleChange}/>
      <label htmlFor="checkbox">체크박스</label>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
