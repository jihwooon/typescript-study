import { Link } from "react-router"
import { DELETE_PRODUCT, UPDATE_PRODUCT, type Product } from "../../graphql/products"
import { useMutation } from "@tanstack/react-query";
import { getQueryClient, graphqlFetcher, QueryKeys } from "../../queryClient";
import arrToObj from "../../util/addToObj";
import type { SyntheticEvent } from "react";

type OmittedProduct = Omit<Product, 'id' | 'createdAt'>

const AdminItem = ({ 
  id, 
  imageUrl, 
  price, 
  title, 
  createdAt,
  isEditing,
  description,
  startEdit,
  doneEdit
}: Product & {
  isEditing: boolean
  startEdit: () => void
  doneEdit: () => void
}) => {
  const queryClient = getQueryClient()
  const { mutate: updateProduct } = useMutation<{ updateProduct: OmittedProduct }, Error, OmittedProduct>({
    mutationFn: (product) => graphqlFetcher(UPDATE_PRODUCT, { id, ...product }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.PRODUCTS], exact: false })
      doneEdit()
    }
  });

  const { mutate: deleteProduct } = useMutation({
    mutationFn: (id: string) => graphqlFetcher(DELETE_PRODUCT, { id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: [QueryKeys.PRODUCTS], 
        exact: false 
      })
    }
  })

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault() 
    const formData = arrToObj([...new FormData(e.target as HTMLFormElement)])
    const price = Number(formData.price)
      if (isNaN(price) || price < 0) {
        alert('올바른 가격을 입력해주세요.')
      return
    }

    formData.price = price
    updateProduct(formData as OmittedProduct)
  }

  const deleteItem = () => {
    deleteProduct(id)
  }
 
  if(isEditing) {
    return (
      <li className="product-item">
        <form onSubmit={handleSubmit}>
          <label>
            상품명: <input name="title" type="text" required defaultValue={title} />
          </label>
          <label>
            이미지URL: <input name="imageUrl" type="text" required defaultValue={imageUrl} />
          </label>
          <label>
            상품가격: <input name="price" type="number" required min="1000" defaultValue={price} />
          </label>
          <label>
            상세: <textarea name="description" defaultValue={description} />
          </label>
          <button type="submit">저장</button>
        </form>
      </li>
    )
  }
  
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} />
        <span className="product-item__price">₩{price}</span>
      </Link>
      {!createdAt && <span>삭제된 상품</span>}
      <button className="product-item__add-cart" onClick={startEdit}>
        수정
      </button>
      <button className="product-item__delete-cart" onClick={deleteItem}>
        삭제
      </button>
    </li>
  )
}

export default AdminItem
