import { useMutation } from "@tanstack/react-query";
import type { SyntheticEvent } from "react";
import { graphqlFetcher } from "../../queryClient";
import { ADD_PRODUCT, type Product } from "../../graphql/products";
import arrToObj from "../../util/addToObj";

type OmittedProduct = Omit<Product, 'id' | 'createdAt'>

const AdminAddForm = () => {
    const { mutate: addProduct } = useMutation<{ addProduct: OmittedProduct }, Error, OmittedProduct>({
        mutationFn: (product) => graphqlFetcher(ADD_PRODUCT, product), 
      });

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        const formData = arrToObj([...new FormData(e.target as HTMLFormElement)])
        formData.price = Number(formData.price)
        addProduct(formData as OmittedProduct)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>상품명: 
              <input name="title" type="text" required />
            </label>
            <label>이미지URL:
              <input name="imageUrl" type="text" required />
            </label>
            <label>상품가격:
              <input name="price" type="number" required min="1000" />
            </label>
            <label>상세 :
              <textarea name="description" />
            </label>
            <button type="submit">등록</button>
        </form>
    );
}

export default AdminAddForm;
