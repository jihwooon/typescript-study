import { useRecoilValue } from "recoil";
import type { SyntheticEvent } from 'react'
import { checkedCartState } from "../../recoils/cart";
import CartItemData from "../cart/CartItemData";

const WillPay = ({ submitTitle, handleSubmit }: { submitTitle: string, handleSubmit: (e: SyntheticEvent) => void}) => {
    const checkedItems = useRecoilValue(checkedCartState)
    const totalPrice = checkedItems.reduce((res, { product: {price, createdAt }, amount}) => {
      if (createdAt) {
        return res += price * amount
      }

      return res
    }, 0)

    return (
        <div className="cart-willpay">
         <ul>
         {checkedItems.map(({ product: { imageUrl, price, title, createdAt }, amount, id }) => (
            <li key={id}>
              <CartItemData imageUrl={imageUrl} title={title} price={price}/>
              <p>수량: {amount}</p>
              <p>금액: {price * amount}</p>
              {!createdAt && '품절된 상품입니다.'}
            </li>
          ))}
         </ul> 
         <p>총 예상 금액: {totalPrice}</p>
         <button onClick={handleSubmit}>{submitTitle}</button>
        </div>
    )
}

export default WillPay;
